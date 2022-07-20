/* eslint-disable no-unused-expressions */

import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
  FingerAxis,
  HandSide,
} from "./FingerDescription";

export default class FingerPoseEstimator {
  constructor(options) {
    this.options = {
      ...{
        // curl estimation
        HALF_CURL_START_LIMIT: 60.0,
        NO_CURL_START_LIMIT: 120.0, // 원래 130
        THUMB_CURL_START_LIMIT: 120.0,

        // direction estimation
        DISTANCE_VOTE_POWER: 1.1,
        SINGLE_ANGLE_VOTE_POWER: 0.9,
        TOTAL_ANGLE_VOTE_POWER: 1.6,
      },
      ...options,
    };
  }

  estimate(landmarks) {
    // step 1: calculate slopes
    const { keypoints3D, handedness } = landmarks;

    const slopesXY = [];
    const slopesYZ = [];

    const isPalmOrBack = this.estimateHandSide(handedness, keypoints3D);

    for (let finger of Finger.all) {
      const points = Finger.getPoints(finger);
      const slopeAtXY = [];
      const slopeAtYZ = [];

      for (let point of points) {
        const point1 = keypoints3D[point[0]];
        const point2 = keypoints3D[point[1]];

        // calculate single slope
        const slopes = this.getSlopes(point1, point2);
        const slopeXY = slopes[0];
        const slopeYZ = slopes[1];

        slopeAtXY.push(slopeXY);
        slopeAtYZ.push(slopeYZ);
      }

      slopesXY.push(slopeAtXY);
      slopesYZ.push(slopeAtYZ);
    }

    // step 2: calculate orientations

    const fingerCurls = [];
    const fingerDirections = [];

    for (let finger of Finger.all) {
      // start finger predictions from palm - except for thumb
      const pointIndexAt = finger === Finger.Thumb ? 1 : 0;

      const fingerPointsAt = Finger.getPoints(finger);
      const startPoint = keypoints3D[fingerPointsAt[pointIndexAt][0]];
      const midPoint = keypoints3D[fingerPointsAt[pointIndexAt + 1][1]];
      const endPoint = keypoints3D[fingerPointsAt[3][1]];

      // check if finger is curled
      const fingerCurled = this.estimateFingerCurl(
        finger,
        startPoint,
        midPoint,
        endPoint,
      );

      const fingerposition = this.calculateFingerDirection(
        finger,
        startPoint,
        midPoint,
        endPoint,
        slopesXY[finger].slice(pointIndexAt),
        slopesYZ[finger].slice(pointIndexAt),
      );

      fingerCurls[finger] = {
        fingerCurled,
        palmOrBack: isPalmOrBack,
      };
      fingerDirections[finger] = {
        xy: fingerposition[0],
        yz: fingerposition[1],
      };
    }

    return { curls: fingerCurls, directions: fingerDirections };
  }

  estimateHandSide(handedness, keypoints) {
    const wrist = keypoints[0];
    const thumb_mcp = keypoints[2];
    const pinky_tip = keypoints[20];

    const { x: wirst_x, y: wirst_y } = wrist;
    const { x: thumb_mcp_x, y: thumb_mcp_y } = thumb_mcp;
    const { x: pinky_tip_x, y: pinky_tip_y } = pinky_tip;
    let expectedHandSide;

    if (
      wirst_x < thumb_mcp_x &&
      thumb_mcp_x > pinky_tip_x &&
      wirst_y > thumb_mcp_y &&
      thumb_mcp_y > pinky_tip_y
    ) {
      if (handedness === Handedness.Left) {
        expectedHandSide = HandSide.Palm;
      } else {
        expectedHandSide = HandSide.Back;
      }
    } else if (
      wirst_x < thumb_mcp_x &&
      thumb_mcp_x < pinky_tip_x &&
      wirst_y < thumb_mcp_y &&
      thumb_mcp_y > pinky_tip_y
    ) {
      if (handedness === Handedness.Left) {
        expectedHandSide = HandSide.Palm;
      } else {
        expectedHandSide = HandSide.Back;
      }
    } else if (
      wirst_x > thumb_mcp_x &&
      thumb_mcp_x > pinky_tip_x &&
      wirst_y > thumb_mcp_y &&
      thumb_mcp_y < pinky_tip_y
    ) {
      if (handedness === Handedness.Left) {
        expectedHandSide = HandSide.Palm;
      } else {
        expectedHandSide = HandSide.Back;
      }
    } else if (
      wirst_x > thumb_mcp_x &&
      thumb_mcp_x < pinky_tip_x &&
      wirst_y < thumb_mcp_y &&
      thumb_mcp_y < pinky_tip_y
    ) {
      if (handedness === Handedness.Left) {
        expectedHandSide = HandSide.Palm;
      } else {
        expectedHandSide = HandSide.Back;
      }
    } else if (
      wirst_x > thumb_mcp_x &&
      thumb_mcp_x < pinky_tip_x &&
      wirst_y > thumb_mcp_y &&
      thumb_mcp_y > pinky_tip_y
    ) {
      if (handedness === Handedness.Left) {
        expectedHandSide = HandSide.Back;
      } else {
        expectedHandSide = HandSide.Palm;
      }
    } else if (
      wirst_x < thumb_mcp_x &&
      thumb_mcp_x < pinky_tip_x &&
      wirst_y > thumb_mcp_y &&
      thumb_mcp_y < pinky_tip_y
    ) {
      if (handedness === Handedness.Left) {
        expectedHandSide = HandSide.Back;
      } else {
        expectedHandSide = HandSide.Palm;
      }
    } else if (
      wirst_x > thumb_mcp_x &&
      thumb_mcp_x > pinky_tip_x &&
      wirst_y < thumb_mcp_y &&
      thumb_mcp_y > pinky_tip_y
    ) {
      if (handedness === Handedness.Left) {
        expectedHandSide = HandSide.Back;
      } else {
        expectedHandSide = HandSide.Palm;
      }
    } else if (
      wirst_x < thumb_mcp_x &&
      thumb_mcp_x > pinky_tip_x &&
      wirst_y < thumb_mcp_y &&
      thumb_mcp_y < pinky_tip_y
    ) {
      if (handedness === Handedness.Left) {
        expectedHandSide = HandSide.Back;
      } else {
        expectedHandSide = HandSide.Palm;
      }
    }

    return expectedHandSide;
  }

  // point1, point2 are 2d or 3d point arrays (xy[z])
  // returns either a single scalar (2d) or array of two slopes (3d)
  getSlopes(point1, point2) {
    let slopeXY = this.calculateSlope(point1.x, point1.y, point2.x, point2.y); // xy면과 방향의 각도
    let slopeYZ = this.calculateSlope(point1.z, point1.y, point2.z, point2.y); // yz면과 방향의 각도

    return [slopeXY, slopeYZ];
  }

  angleOrientationAt(angle, weightageAt = 1.0) {
    let isVertical = 0;
    let isDiagonal = 0;
    let isHorizontal = 0;

    if (angle >= 72.0 && angle <= 108.0) {
      isVertical = 1 * weightageAt;
    } else if (angle >= 25.0 && angle <= 155.0) {
      isDiagonal = 1 * weightageAt;
    } else {
      isHorizontal = 1 * weightageAt;
    }

    return [isVertical, isDiagonal, isHorizontal];
  }

  estimateFingerCurl(finger, startPoint, midPoint, endPoint) {
    const start_mid_x_dist = startPoint.x - midPoint.x;
    const start_end_x_dist = startPoint.x - endPoint.x;
    const mid_end_x_dist = midPoint.x - endPoint.x;

    const start_mid_y_dist = startPoint.y - midPoint.y;
    const start_end_y_dist = startPoint.y - endPoint.y;
    const mid_end_y_dist = midPoint.y - endPoint.y;

    const start_mid_z_dist = startPoint.z - midPoint.z;
    const start_end_z_dist = startPoint.z - endPoint.z;
    const mid_end_z_dist = midPoint.z - endPoint.z;

    const start_mid_dist = Math.sqrt(
      start_mid_x_dist * start_mid_x_dist +
        start_mid_y_dist * start_mid_y_dist +
        start_mid_z_dist * start_mid_z_dist,
    );
    const start_end_dist = Math.sqrt(
      start_end_x_dist * start_end_x_dist +
        start_end_y_dist * start_end_y_dist +
        start_end_z_dist * start_end_z_dist,
    );
    const mid_end_dist = Math.sqrt(
      mid_end_x_dist * mid_end_x_dist +
        mid_end_y_dist * mid_end_y_dist +
        mid_end_z_dist * mid_end_z_dist,
    );

    let cos_in =
      // 코사인 제 2법칙
      (mid_end_dist * mid_end_dist +
        start_mid_dist * start_mid_dist -
        start_end_dist * start_end_dist) /
      (2 * mid_end_dist * start_mid_dist);

    if (cos_in > 1.0) {
      cos_in = 1.0;
    } else if (cos_in < -1.0) {
      cos_in = -1.0;
    }

    let angleOfCurve = Math.acos(cos_in); // COS값을 arc cosin을 이용하여 degree을 구함
    angleOfCurve = (57.2958 * angleOfCurve) % 180; // degree으로 radian를 구함

    let fingerCurl;
    if (finger === 0) {
      if (angleOfCurve > this.options.THUMB_CURL_START_LIMIT) {
        fingerCurl = FingerCurl.NoCurl;
      } else {
        fingerCurl = FingerCurl.HalfCurl;
      }
    } else {
      if (angleOfCurve > this.options.NO_CURL_START_LIMIT) {
        //120
        fingerCurl = FingerCurl.NoCurl;
      } else if (angleOfCurve > this.options.HALF_CURL_START_LIMIT) {
        // 60
        fingerCurl = FingerCurl.HalfCurl;
      } else {
        fingerCurl = FingerCurl.FullCurl;
      }
    }

    return fingerCurl;
  }

  estimateHorizontalDirection(
    axis,
    start_end_x_z_dist,
    start_mid_x_z_dist,
    mid_end_x_z_dist,
    max_dist_x_z,
  ) {
    let estimatedDirection;

    if (axis === FingerAxis.XY) {
      if (max_dist_x_z === Math.abs(start_end_x_z_dist)) {
        if (start_end_x_z_dist > 0) {
          estimatedDirection = FingerDirection[axis].HorizontalLeft; // 2
        } else {
          estimatedDirection = FingerDirection[axis].HorizontalRight; // 3
        }
      } else if (max_dist_x_z === Math.abs(start_mid_x_z_dist)) {
        if (start_mid_x_z_dist > 0) {
          estimatedDirection = FingerDirection[axis].HorizontalLeft;
        } else {
          estimatedDirection = FingerDirection[axis].HorizontalRight;
        }
      } else {
        if (mid_end_x_z_dist > 0) {
          estimatedDirection = FingerDirection[axis].HorizontalLeft;
        } else {
          estimatedDirection = FingerDirection[axis].HorizontalRight;
        }
      }
    } else {
      if (max_dist_x_z === Math.abs(start_end_x_z_dist)) {
        if (start_end_x_z_dist > 0) {
          estimatedDirection = FingerDirection[axis].ForwardMiddle;
        } else {
          estimatedDirection = FingerDirection[axis].BackwardMiddle;
        }
      } else if (max_dist_x_z === Math.abs(start_mid_x_z_dist)) {
        if (start_mid_x_z_dist > 0) {
          estimatedDirection = FingerDirection[axis].ForwardMiddle;
        } else {
          estimatedDirection = FingerDirection[axis].BackwardMiddle;
        }
      } else {
        if (mid_end_x_z_dist > 0) {
          estimatedDirection = FingerDirection[axis].ForwardMiddle;
        } else {
          estimatedDirection = FingerDirection[axis].BackwardMiddle;
        }
      }
    }

    return estimatedDirection;
  }

  estimateVerticalDirection(
    axis,
    start_end_y_dist,
    start_mid_y_dist,
    mid_end_y_dist,
    max_dist_y,
  ) {
    let estimatedDirection;

    if (max_dist_y === Math.abs(start_end_y_dist)) {
      if (start_end_y_dist < 0) {
        estimatedDirection = FingerDirection[axis].VerticalDown;
      } else {
        estimatedDirection = FingerDirection[axis].VerticalUp;
      }
    } else if (max_dist_y === Math.abs(start_mid_y_dist)) {
      if (start_mid_y_dist < 0) {
        estimatedDirection = FingerDirection[axis].VerticalDown;
      } else {
        estimatedDirection = FingerDirection[axis].VerticalUp;
      }
    } else {
      if (mid_end_y_dist < 0) {
        estimatedDirection = FingerDirection[axis].VerticalDown;
      } else {
        estimatedDirection = FingerDirection[axis].VerticalUp;
      }
    }

    return estimatedDirection;
  }

  estimateDiagonalDirection(
    axis,
    start_end_y_dist,
    start_mid_y_dist,
    mid_end_y_dist,
    max_dist_y,
    start_end_x_z_dist,
    start_mid_x_z_dist,
    mid_end_x_z_dist,
    max_dist_x_z,
  ) {
    let estimatedDirection;
    let reqd_vertical_direction = this.estimateVerticalDirection(
      axis,
      start_end_y_dist,
      start_mid_y_dist,
      mid_end_y_dist,
      max_dist_y,
    );
    let reqd_horizontal_direction = this.estimateHorizontalDirection(
      axis,
      start_end_x_z_dist,
      start_mid_x_z_dist,
      mid_end_x_z_dist,
      max_dist_x_z,
    );

    if (axis === FingerAxis.XY) {
      if (reqd_vertical_direction === FingerDirection[axis].VerticalUp) {
        if (
          reqd_horizontal_direction === FingerDirection[axis].HorizontalLeft
        ) {
          estimatedDirection = FingerDirection[axis].DiagonalUpLeft;
        } else {
          estimatedDirection = FingerDirection[axis].DiagonalUpRight;
        }
      } else {
        if (
          reqd_horizontal_direction === FingerDirection[axis].HorizontalLeft
        ) {
          estimatedDirection = FingerDirection[axis].DiagonalDownLeft;
        } else {
          estimatedDirection = FingerDirection[axis].DiagonalDownRight;
        }
      }
    } else {
      if (reqd_vertical_direction === FingerDirection[axis].VerticalUp) {
        if (reqd_horizontal_direction === FingerDirection[axis].ForwardMiddle) {
          estimatedDirection = FingerDirection[axis].ForwardUp;
        } else {
          estimatedDirection = FingerDirection[axis].BackwardUp;
        }
      } else {
        if (reqd_horizontal_direction === FingerDirection[axis].ForwardMiddle) {
          estimatedDirection = FingerDirection[axis].ForwardDown;
        } else {
          estimatedDirection = FingerDirection[axis].BackwardDown;
        }
      }
    }

    return estimatedDirection;
  }

  calculateFingerDirection(
    finger,
    startPoint,
    midPoint,
    endPoint,
    XYslopes,
    YZslopes,
  ) {
    let start_mid_x_dist = startPoint.x - midPoint.x;
    let start_end_x_dist = startPoint.x - endPoint.x;
    let mid_end_x_dist = midPoint.x - endPoint.x;

    let start_mid_y_dist = startPoint.y - midPoint.y;
    let start_end_y_dist = startPoint.y - endPoint.y;
    let mid_end_y_dist = midPoint.y - endPoint.y;

    let start_mid_z_dist = startPoint.z - midPoint.z;
    let start_end_z_dist = startPoint.z - endPoint.z;
    let mid_end_z_dist = midPoint.z - endPoint.z;

    let max_dist_x = Math.max(
      Math.abs(start_mid_x_dist),
      Math.abs(start_end_x_dist),
      Math.abs(mid_end_x_dist),
    );
    let max_dist_y = Math.max(
      Math.abs(start_mid_y_dist),
      Math.abs(start_end_y_dist),
      Math.abs(mid_end_y_dist),
    );
    let max_dist_z = Math.max(
      Math.abs(start_mid_z_dist),
      Math.abs(start_end_z_dist),
      Math.abs(mid_end_z_dist),
    );

    let voteVerticalXY = 0.0; // 수직
    let voteDiagonalXY = 0.0; // 대각선
    let voteHorizontalXY = 0.0; // 수평
    let voteVerticalYZ = 0.0; // 수직
    let voteDiagonalYZ = 0.0; // 대각선
    let voteHorizontalYZ = 0.0; // 수평

    let start_end_x_y_dist_ratio = max_dist_y / (max_dist_x + 0.00001);
    let start_end_z_y_dist_ratio = max_dist_y / (max_dist_z + 0.00001);

    if (start_end_x_y_dist_ratio > 1.5) {
      voteVerticalXY += this.options.DISTANCE_VOTE_POWER;
    } else if (start_end_x_y_dist_ratio > 0.66) {
      voteDiagonalXY += this.options.DISTANCE_VOTE_POWER;
    } else {
      voteHorizontalXY += this.options.DISTANCE_VOTE_POWER;
    }

    if (start_end_z_y_dist_ratio > 1.5) {
      voteVerticalYZ += this.options.DISTANCE_VOTE_POWER;
    } else if (start_end_z_y_dist_ratio > 0.66) {
      voteDiagonalYZ += this.options.DISTANCE_VOTE_POWER;
    } else {
      voteHorizontalYZ += this.options.DISTANCE_VOTE_POWER;
    }

    let start_mid_x_y_dist = Math.sqrt(
      start_mid_x_dist * start_mid_x_dist + start_mid_y_dist * start_mid_y_dist,
    );
    let start_end_x_y_dist = Math.sqrt(
      start_end_x_dist * start_end_x_dist + start_end_y_dist * start_end_y_dist,
    );
    let mid_end_x_y_dist = Math.sqrt(
      mid_end_x_dist * mid_end_x_dist + mid_end_y_dist * mid_end_y_dist,
    );
    let start_mid_y_z_dist = Math.sqrt(
      start_mid_y_dist * start_mid_y_dist + start_mid_z_dist * start_mid_z_dist,
    );
    let start_end_y_z_dist = Math.sqrt(
      start_end_y_dist * start_end_y_dist + start_end_z_dist * start_end_z_dist,
    );
    let mid_end_y_z_dist = Math.sqrt(
      mid_end_y_dist * mid_end_y_dist + mid_end_z_dist * mid_end_z_dist,
    );

    let max_x_y_dist = Math.max(
      start_mid_x_y_dist,
      start_end_x_y_dist,
      mid_end_x_y_dist,
    );
    let max_y_zdist = Math.max(
      start_mid_y_z_dist,
      start_end_y_z_dist,
      mid_end_y_z_dist,
    );

    let calc_start_point_x = startPoint.x;
    let calc_start_point_y = startPoint.y;
    let calc_start_point_z = startPoint.z;
    let calc_end_point_x = endPoint.x;
    let calc_end_point_y = endPoint.y;
    let calc_end_point_z = endPoint.z;

    if (max_x_y_dist === start_mid_x_y_dist) {
      calc_end_point_x = endPoint.x;
      calc_end_point_y = endPoint.y;
    } else if (max_x_y_dist === mid_end_x_y_dist) {
      calc_start_point_x = midPoint.x;
      calc_start_point_y = midPoint.y;
    }

    if (max_y_zdist === start_mid_y_z_dist) {
      calc_end_point_y = endPoint.y;
      calc_end_point_z = endPoint.z;
    } else if (max_y_zdist === mid_end_y_z_dist) {
      calc_start_point_y = midPoint.y;
      calc_start_point_z = midPoint.z;
    }

    let calcStartPoint = {
      x: calc_start_point_x,
      y: calc_start_point_y,
      z: calc_start_point_z,
    };
    let calcEndPoint = {
      x: calc_end_point_x,
      y: calc_end_point_y,
      z: calc_end_point_z,
    };

    let totalAngle = this.getSlopes(calcStartPoint, calcEndPoint);

    let votesXY = this.angleOrientationAt(
      totalAngle[0],
      this.options.TOTAL_ANGLE_VOTE_POWER,
    );

    voteVerticalXY += votesXY[0];
    voteDiagonalXY += votesXY[1];
    voteHorizontalXY += votesXY[2];

    let votesYZ = this.angleOrientationAt(
      totalAngle[1],
      this.options.TOTAL_ANGLE_VOTE_POWER,
    );

    voteVerticalYZ += votesYZ[0];
    voteDiagonalYZ += votesYZ[1];
    voteHorizontalYZ += votesYZ[2];

    //finger
    for (let XYslope of XYslopes) {
      let votes = this.angleOrientationAt(
        XYslope,
        this.options.SINGLE_ANGLE_VOTE_POWER,
      );

      voteVerticalXY += votes[0];
      voteDiagonalXY += votes[1];
      voteHorizontalXY += votes[2];
    }

    for (let YZslope of YZslopes) {
      let votes = this.angleOrientationAt(
        YZslope,
        this.options.SINGLE_ANGLE_VOTE_POWER,
      );

      voteVerticalYZ += votes[0];
      voteDiagonalYZ += votes[1];
      voteHorizontalYZ += votes[2];
    }

    // in case of tie, highest preference goes to Vertical,
    // followed by horizontal and then diagonal
    let estimatedDirectionXY;
    let estimatedDirectionYZ;
    if (
      voteVerticalXY ===
      Math.max(voteVerticalXY, voteDiagonalXY, voteHorizontalXY)
    ) {
      estimatedDirectionXY = this.estimateVerticalDirection(
        FingerAxis.XY,
        start_end_y_dist,
        start_mid_y_dist,
        mid_end_y_dist,
        max_dist_y,
      );
    } else if (
      voteHorizontalXY === Math.max(voteDiagonalXY, voteHorizontalXY)
    ) {
      estimatedDirectionXY = this.estimateHorizontalDirection(
        FingerAxis.XY,
        start_end_x_dist,
        start_mid_x_dist,
        mid_end_x_dist,
        max_dist_x,
      );
    } else {
      estimatedDirectionXY = this.estimateDiagonalDirection(
        FingerAxis.XY,
        start_end_y_dist,
        start_mid_y_dist,
        mid_end_y_dist,
        max_dist_y,
        start_end_x_dist,
        start_mid_x_dist,
        mid_end_x_dist,
        max_dist_x,
      );
    }

    if (
      voteVerticalYZ ===
      Math.max(voteVerticalYZ, voteDiagonalYZ, voteHorizontalYZ)
    ) {
      estimatedDirectionYZ = this.estimateVerticalDirection(
        FingerAxis.YZ,
        start_end_y_dist,
        start_mid_y_dist,
        mid_end_y_dist,
        max_dist_y,
      );
    } else if (
      voteHorizontalYZ === Math.max(voteDiagonalYZ, voteHorizontalYZ)
    ) {
      estimatedDirectionYZ = this.estimateHorizontalDirection(
        FingerAxis.YZ,
        start_end_z_dist,
        start_mid_z_dist,
        mid_end_z_dist,
        max_dist_z,
      );
    } else {
      estimatedDirectionYZ = this.estimateDiagonalDirection(
        FingerAxis.YZ,
        start_end_y_dist,
        start_mid_y_dist,
        mid_end_y_dist,
        max_dist_y,
        start_end_z_dist,
        start_mid_z_dist,
        mid_end_z_dist,
        max_dist_z,
      );
    }

    return [estimatedDirectionXY, estimatedDirectionYZ];
  }

  //직각 삼각형의 높이와 밑변의 길이를 알 때 빗변과 밑변 사이의 끼인 값

  calculateSlope(point1x_z, point1y, point2x_z, point2y) {
    const value = (point1y - point2y) / (point1x_z - point2x_z); // 밑변 분의 높이
    const radian = Math.atan(value); // 아크 탄젠트로 라디안 값 구하기
    let slope = (radian * 180) / Math.PI;
    // arc tan은 angel의 radian을 반환, 여기서180/PI를 하면 degree로 변환

    if (slope <= 0) {
      // 음수면 양수로 변경 (절대값)
      slope = -slope;
    } else if (slope > 0) {
      slope = 180 - slope;
    }

    return slope;
  }
}
