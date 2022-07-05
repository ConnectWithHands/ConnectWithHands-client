import FingerPoseEstimator from "./FingerPoseEstimator";
import { Finger, FingerCurl, FingerDirection } from "./FingerDescription";
import { copyModel } from "@tensorflow/tfjs-core/dist/io/model_management";

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
      const estimation = this.estimator.estimate(landmark.keypoints3D);
      const handData = {
        handedness: landmark.handedness,
        curls: estimation.curls,
        directions: estimation.directions,
      };
      hands.push(handData);
    }

    const gestureData = [];

    for (let hand of hands) {
      let poseData = [];
      let gesturesFound = [];

      for (let fingerIdx of Finger.all) {
        poseData.push([
          Finger.getName(fingerIdx),
          FingerCurl.getName(hand.curls[fingerIdx]),
          FingerDirection.getName(hand.directions[fingerIdx]),
        ]);
      }

      // step 2: compare gesture description to each known gesture
      for (let gesture of this.gestures) {
        let score = gesture.matchAgainst(
          hand.handedness,
          hand.curls,
          hand.directions,
        );

        if (score >= minScore) {
          gesturesFound.push({
            name: gesture.name,
            score: score,
            numberOfHands: Object.keys(gesture.curls).length,
          });
        }
      }

      gestureData.push({
        handness: hand.handedness,
        poseData: poseData,
        gestures: gesturesFound,
      });
    }

    return gestureData;
  }
}
