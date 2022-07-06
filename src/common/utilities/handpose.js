import * as handPoseDetection from "@tensorflow-models/hand-pose-detection";
import "@tensorflow/tfjs-core";
import "@tensorflow/tfjs-backend-webgl";

export const setHandDetector = async () => {
  const hands = await handPoseDetection.SupportedModels.MediaPipeHands;
  const detectorConfig = {
    runtime: "tfjs",
    modelType: "full",
    maxHands: 2,
  };

  return handPoseDetection.createDetector(hands, detectorConfig);
};
