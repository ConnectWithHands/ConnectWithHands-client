import { FingerAxis } from "./FingerDescription";

export default class GestureDescription {
  constructor(name) {
    // name (should be unique)
    this.name = name;

    // gesture as described by curls / directions
    this.curls = {};
    this.directions = {};
  }

  addCurl(handedness, finger, curl, contrib = 1.0, palmOrback = "") {
    if (!this.curls[handedness]?.[finger]) {
      this.curls[handedness] = {
        ...this.curls[handedness],
        [finger]: [[curl, contrib, palmOrback]],
      };
    } else {
      this.curls[handedness] = {
        ...this.curls[handedness],
        [finger]: [
          ...this.curls[handedness][finger],
          [curl, contrib, palmOrback],
        ],
      };
    }
  }

  addDirection(
    handedness,
    finger,
    direction,
    contrib = 1.0,
    axis = FingerAxis.XY,
  ) {
    if (!this.directions[handedness]?.[finger]) {
      this.directions[handedness] = {
        ...this.directions[handedness],
        [finger]: { [axis]: [[direction, contrib]] },
      };
    } else {
      if (this.directions[handedness][finger]?.[axis]) {
        this.directions[handedness][finger] = {
          ...this.directions[handedness][finger],
          [axis]: [
            ...this.directions[handedness][finger][axis],
            [direction, contrib],
          ],
        };
      } else {
        this.directions[handedness][finger] = {
          ...this.directions[handedness][finger],
          [axis]: [[direction, contrib]],
        };
      }
    }
  }

  matchAgainst(detectedHandedness, detectedCurls, detectedDirections) {
    let score = 0.0;
    let numParameters = 0;

    // look at the detected curl of each finger and compare with
    // the expected curl of this finger inside current gesture
    for (let finger in detectedCurls) {
      const { fingerCurled, palmOrBack } = detectedCurls[finger];
      let detectedCurl = fingerCurled;
      let expectedCurls = this.curls?.[detectedHandedness]?.[finger];

      if (typeof expectedCurls === "undefined") {
        // no curl description available for this finger
        // => no contribution to the final score
        continue;
      }

      // increase the number of relevant parameters
      numParameters++;

      // compare to each possible curl of this specific finger
      let matchingCurlFound = false;
      let highestCurlContrib = 0;
      for (const [
        expectedCurl,
        contrib,
        exptectedPalmOrBack,
      ] of expectedCurls) {
        // exptectedPalmOrback 계산법
        if (exptectedPalmOrBack && palmOrBack !== exptectedPalmOrBack) {
          continue;
        }
        if (detectedCurl == expectedCurl) {
          score += contrib;
          highestCurlContrib = Math.max(highestCurlContrib, contrib);
          matchingCurlFound = true;
          break;
        }
      }

      // subtract penalty if curl was expected but not found
      if (!matchingCurlFound) {
        score -= highestCurlContrib;
      }
    }

    // same for detected direction of each finger
    for (let fingerIdx in detectedDirections) {
      let detectedXYDirection = detectedDirections[fingerIdx]?.[FingerAxis.XY];
      let detectedYZDirection = detectedDirections[fingerIdx]?.[FingerAxis.YZ];
      let expectedDirections =
        this.directions?.[detectedHandedness]?.[fingerIdx];

      if (typeof expectedDirections === "undefined") {
        // no direction description available for this finger
        // => no contribution to the final score
        continue;
      }

      // increase the number of relevant parameters
      numParameters++;

      // compare to each possible direction of this specific finger
      let matchingDirectionFound = false;
      let highestDirectionContrib = 0;
      for (const axis in expectedDirections) {
        const detectedDirection =
          axis === FingerAxis.XY ? detectedXYDirection : detectedYZDirection;

        for (const [expectedDirection, contrib] of expectedDirections[axis]) {
          if (detectedDirection == expectedDirection) {
            score += contrib;
            highestDirectionContrib = Math.max(
              highestDirectionContrib,
              contrib,
            );
            matchingDirectionFound = true;
            break;
          }
        }
      }

      // subtract penalty if direction was expected but not found
      if (!matchingDirectionFound) {
        score -= highestDirectionContrib;
      }
    }

    // multiply final score with 10 (to maintain compatibility)
    let finalScore = (score / numParameters) * 10;

    return finalScore;
  }
}
