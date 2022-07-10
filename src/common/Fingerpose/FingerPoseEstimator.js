/* eslint-disable no-unused-expressions */

import {
  Finger,
  FingerCurl,
  FingerDirection,
  FingerAxis,
} from "./FingerDescription";

export default class FingerPoseEstimator {
  constructor(options) {
    this.options = {
      ...{
        // curl estimation
        HALF_CURL_START_LIMIT: 60.0,
        NO_CURL_START_LIMIT: 125.0, // 원래 130

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

    let slopesXY = [];
    let slopesZY = [];

    let isPalmOrBack = "";

    if (handedness === "Left") {
      isPalmOrBack = keypoints3D[2].x > 0 ? "palm" : "back";
    } else {
      isPalmOrBack = keypoints3D[2].x < 0 ? "palm" : "back";
    }

    for (let finger of Finger.all) {
      let points = Finger.getPoints(finger);
      let slopeAtXY = [];
      let slopeAtZY = [];

      for (let point of points) {
        let point1 = keypoints3D[point[0]];
        let point2 = keypoints3D[point[1]];

        // calculate single slope
        let slopes = this.getSlopes(point1, point2);
        let slopeXY = slopes[0];
        let slopeZY = slopes[1];

        slopeAtXY.push(slopeXY);
        slopeAtZY.push(slopeZY);
      }

      slopesXY.push(slopeAtXY);
      slopesZY.push(slopeAtZY);
    }

    // step 2: calculate orientations

    let fingerCurls = [];
    let fingerDirections = [];

    for (let finger of Finger.all) {
      // start finger predictions from palm - except for thumb
      let pointIndexAt = finger === Finger.Thumb ? 1 : 0;

      let fingerPointsAt = Finger.getPoints(finger);
      let startPoint = keypoints3D[fingerPointsAt[pointIndexAt][0]];
      let midPoint = keypoints3D[fingerPointsAt[pointIndexAt + 1][1]];
      let endPoint = keypoints3D[fingerPointsAt[3][1]];

      // check if finger is curled
      let fingerCurled = this.estimateFingerCurl(
        finger,
        startPoint,
        midPoint,
        endPoint,
      );

      let fingerXYposition = this.calculateFingerDirection(
        finger,
        handedness,
        isPalmOrBack,
        FingerAxis.XY,
        startPoint,
        midPoint,
        endPoint,
        slopesXY[finger].slice(pointIndexAt),
      );

      let fingerYZposition = this.calculateFingerDirection(
        finger,
        handedness,
        isPalmOrBack,
        FingerAxis.YZ,
        startPoint,
        midPoint,
        endPoint,
        slopesZY[finger].slice(pointIndexAt),
      );

      fingerCurls[finger] = {
        fingerCurled,
        palmOrBack: isPalmOrBack,
      };
      fingerDirections[finger] = { xy: fingerXYposition, yz: fingerYZposition };
    }

    return { curls: fingerCurls, directions: fingerDirections };
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
    // startPoint - 0 & wrist, midPoint - 6 & pip, endPoint - 8 & tip
    let start_mid_x_dist = startPoint.x - midPoint.x;
    let start_end_x_dist = startPoint.x - endPoint.x;
    let mid_end_x_dist = midPoint.x - endPoint.x;

    let start_mid_y_dist = startPoint.y - midPoint.y;
    let start_end_y_dist = startPoint.y - endPoint.y;
    let mid_end_y_dist = midPoint.y - endPoint.y;

    let start_mid_z_dist = startPoint.z - midPoint.z;
    let start_end_z_dist = startPoint.z - endPoint.z;
    let mid_end_z_dist = midPoint.z - endPoint.z;

    let start_mid_dist = Math.sqrt(
      //ab - wrist to index-finger-pip
      start_mid_x_dist * start_mid_x_dist +
        start_mid_y_dist * start_mid_y_dist +
        start_mid_z_dist * start_mid_z_dist,
    );
    let start_end_dist = Math.sqrt(
      //ac - wrist to index-finger-tip
      start_end_x_dist * start_end_x_dist +
        start_end_y_dist * start_end_y_dist +
        start_end_z_dist * start_end_z_dist,
    );
    let mid_end_dist = Math.sqrt(
      //bc - index-finger-pip to index-finger-tip
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
    if (angleOfCurve > this.options.NO_CURL_START_LIMIT) {
      //130
      fingerCurl = FingerCurl.NoCurl;
    } else if (angleOfCurve > this.options.HALF_CURL_START_LIMIT) {
      // 60
      fingerCurl = FingerCurl.HalfCurl;
    } else {
      fingerCurl = FingerCurl.FullCurl;
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

    if (axis === FingerAxis.XY) {
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
    } else {
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
    handedness,
    isPalmOrBack,
    axis,
    startPoint,
    midPoint,
    endPoint,
    fingerSlopes,
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
      // x 좌표 기준으로 거리가 가장 큰 값
      Math.abs(start_mid_x_dist),
      Math.abs(start_end_x_dist),
      Math.abs(mid_end_x_dist),
    );
    let max_dist_y = Math.max(
      // y 좌표 기준으로 거리가 가장 큰 값
      Math.abs(start_mid_y_dist),
      Math.abs(start_end_y_dist),
      Math.abs(mid_end_y_dist),
    );
    let max_dist_z = Math.max(
      Math.abs(start_mid_z_dist),
      Math.abs(start_end_z_dist),
      Math.abs(mid_end_z_dist),
    );

    let voteVertical = 0.0; // 수직
    let voteDiagonal = 0.0; // 대각선
    let voteHorizontal = 0.0; // 수평

    let start_end_x_y_dist_ratio = max_dist_y / (max_dist_x + 0.00001);
    let start_end_z_y_dist_ratio = max_dist_y / (max_dist_z + 0.00001);
    let start_end_dist_ratio =
      axis === FingerAxis.XY
        ? start_end_x_y_dist_ratio
        : start_end_z_y_dist_ratio;

    // 최대 y 거리 나누기 최대 x 거리가 클 수록 비율 대비 y 거리가 x보다 더 큼
    if (start_end_dist_ratio > 1.5) {
      voteVertical += this.options.DISTANCE_VOTE_POWER;
    } else if (start_end_dist_ratio > 0.66) {
      voteDiagonal += this.options.DISTANCE_VOTE_POWER;
    } else {
      voteHorizontal += this.options.DISTANCE_VOTE_POWER;
    }

    let start_mid_dist;
    let start_end_dist;
    let mid_end_dist;

    if (axis === FingerAxis.XY) {
      start_mid_dist = Math.sqrt(
        start_mid_x_dist * start_mid_x_dist +
          start_mid_y_dist * start_mid_y_dist,
      );
      start_end_dist = Math.sqrt(
        start_end_x_dist * start_end_x_dist +
          start_end_y_dist * start_end_y_dist,
      );
      mid_end_dist = Math.sqrt(
        mid_end_x_dist * mid_end_x_dist + mid_end_y_dist * mid_end_y_dist,
      );
    } else {
      start_mid_dist = Math.sqrt(
        start_mid_y_dist * start_mid_y_dist +
          start_mid_z_dist * start_mid_z_dist,
      );
      start_end_dist = Math.sqrt(
        start_end_y_dist * start_end_y_dist +
          start_end_z_dist * start_end_z_dist,
      );
      mid_end_dist = Math.sqrt(
        mid_end_y_dist * mid_end_y_dist + mid_end_z_dist * mid_end_z_dist,
      );
    }

    // start mid 거리
    let max_dist = Math.max(start_mid_dist, start_end_dist, mid_end_dist); // 빗변의 길이
    let calc_start_point_x = startPoint.x;
    let calc_start_point_y = startPoint.y;
    let calc_start_point_z = startPoint.z;
    let calc_end_point_x = endPoint.x;
    let calc_end_point_y = endPoint.y;
    let calc_end_point_z = endPoint.z;

    if (axis === FingerAxis.XY) {
      if (max_dist === start_mid_dist) {
        calc_end_point_x = endPoint.x;
        calc_end_point_y = endPoint.y;
      } else if (max_dist === mid_end_dist) {
        calc_start_point_x = midPoint.x;
        calc_start_point_y = midPoint.y;
      }
    } else {
      if (max_dist === start_mid_dist) {
        calc_end_point_y = endPoint.y;
        calc_end_point_z = endPoint.z;
      } else if (max_dist === mid_end_dist) {
        calc_start_point_y = midPoint.y;
        calc_start_point_z = midPoint.z;
      }
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

    const angle = axis === FingerAxis.XY ? totalAngle[0] : totalAngle[1];

    let votes = this.angleOrientationAt(
      angle,
      this.options.TOTAL_ANGLE_VOTE_POWER,
    );
    voteVertical += votes[0];
    voteDiagonal += votes[1];
    voteHorizontal += votes[2];

    for (let fingerSlope of fingerSlopes) {
      // 손가락 0-5 제외 나머지 slopeXY들
      let votes = this.angleOrientationAt(
        fingerSlope,
        this.options.SINGLE_ANGLE_VOTE_POWER,
      );
      voteVertical += votes[0];
      voteDiagonal += votes[1];
      voteHorizontal += votes[2];
    }

    // in case of tie, highest preference goes to Vertical,
    // followed by horizontal and then diagonal
    let estimatedDirection;
    if (voteVertical === Math.max(voteVertical, voteDiagonal, voteHorizontal)) {
      estimatedDirection = this.estimateVerticalDirection(
        axis,
        start_end_y_dist,
        start_mid_y_dist,
        mid_end_y_dist,
        max_dist_y,
      );
    } else if (voteHorizontal === Math.max(voteDiagonal, voteHorizontal)) {
      if (axis === FingerAxis.XY) {
        estimatedDirection = this.estimateHorizontalDirection(
          axis,
          start_end_x_dist,
          start_mid_x_dist,
          mid_end_x_dist,
          max_dist_x,
        );
      } else {
        estimatedDirection = this.estimateHorizontalDirection(
          axis,
          start_end_z_dist,
          start_mid_z_dist,
          mid_end_z_dist,
          max_dist_z,
        );
      }
    } else {
      if (axis === FingerAxis.XY) {
        estimatedDirection = this.estimateDiagonalDirection(
          axis,
          start_end_y_dist,
          start_mid_y_dist,
          mid_end_y_dist,
          max_dist_y,
          start_end_x_dist,
          start_mid_x_dist,
          mid_end_x_dist,
          max_dist_x,
        );
      } else {
        estimatedDirection = this.estimateDiagonalDirection(
          axis,
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
    }

    return estimatedDirection;
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
