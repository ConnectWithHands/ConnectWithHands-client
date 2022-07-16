import FingerPoseEstimator from "./FingerPoseEstimator";
import {
  Finger,
  FingerCurl,
  FingerDirection,
  FingerAxis,
} from "./FingerDescription";

export default class GestureEstimator {
  constructor(knownGestures, estimatorOptions = {}) {
    this.estimator = new FingerPoseEstimator(estimatorOptions);

    // list of predefined gestures
    this.gestures = knownGestures;
  }

  estimate(landmarks, minScore) {
    // step 1: get estimations of curl / direction for each finger
    const hands = [];

    for (let landmark of landmarks) {
      const estimation = this.estimator.estimate(landmark);
      const handData = {
        handedness: landmark.handedness,
        curls: estimation.curls,
        directions: estimation.directions,
      };

      hands.push(handData);
    }

    const fingerData = [];

    for (let hand of hands) {
      const poseData = [];
      const gesturesFound = [];

      for (let fingerIdx of Finger.all) {
        poseData.push([
          Finger.getName(fingerIdx),
          FingerCurl.getName(hand.curls[fingerIdx].fingerCurled),
          FingerDirection.getName(
            FingerAxis.XY,
            hand.directions[fingerIdx][FingerAxis.XY],
          ),
          FingerDirection.getName(
            FingerAxis.YZ,
            hand.directions[fingerIdx][FingerAxis.YZ],
          ),
        ]);
      }

      // step 2: compare gesture description to each known gesture
      for (let gesture of this.gestures) {
        const score = gesture.matchAgainst(
          hand.handedness,
          hand.curls,
          hand.directions,
        );

        if (score >= minScore) {
          gesturesFound.push({
            name: gesture.name,
            score: score,
            numberOfHands: gesture.numOfHands,
          });
        }
      }

      fingerData.push({
        handness: hand.handedness,
        poseData: poseData,
        gestures: gesturesFound,
      });
    }

    const gesturesData = [];

    for (let gesture of this.gestures) {
      if (gesture.numOfHands !== hands.length) {
        continue;
      }

      let sumOfScores = 0;
      let isGestureMatched = true;

      for (let hand of hands) {
        const score = gesture.matchAgainst(
          hand.handedness,
          hand.curls,
          hand.directions,
        );

        if (score < minScore) {
          isGestureMatched = false;
          break;
        }

        sumOfScores += score;
      }

      if (isGestureMatched) {
        gesturesData.push({
          name: gesture.name,
          score: sumOfScores / gesture.numOfHands,
          numberOfHands: gesture.numOfHands,
        });
      }
    }

    const bestGesture = [];

    if (gesturesData.length) {
      const higherScore = gesturesData.reduce((prev, current) =>
        prev.score >= current.score ? prev : current,
      );
      bestGesture.push(higherScore);
    }

    return { fingerData, bestGesture };
  }
}
