import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
  HandSide,
  FingerAxis,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const speech = new GestureDescription("speech");

speech.addCurl(Handedness.Right, Finger.Thumb, FingerCurl.NoCurl, 1.0);
speech.addDirection(
  Handedness.Right,
  Finger.Thumb,
  FingerDirection[FingerAxis.XY].DiagonalUpLeft,
  0.8,
);

speech.addCurl(
  Handedness.Right,
  Finger.Index,
  FingerCurl.HalfCurl,
  1.0,
  HandSide.Palm,
);
speech.addDirection(
  Handedness.Right,
  Finger.Index,
  FingerDirection[FingerAxis.XY].DiagonalUpLeft,
  0.8,
);

speech.addCurl(Handedness.Right, Finger.Middle, FingerCurl.NoCurl, 1.0);

speech.addCurl(Handedness.Right, Finger.Ring, FingerCurl.NoCurl, 1.0);

speech.addCurl(Handedness.Right, Finger.Pinky, FingerCurl.NoCurl, 1.0);

export default speech;
