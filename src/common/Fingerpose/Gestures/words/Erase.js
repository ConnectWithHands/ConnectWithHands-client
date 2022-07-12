import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
  HandSide,
  FingerAxis,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const erase = new GestureDescription("erase");

erase.addCurl(Handedness.Right, Finger.Thumb, FingerCurl.NoCurl, 1.0);
erase.addCurl(Handedness.Right, Finger.Thumb, FingerCurl.HalfCurl, 0.8);
erase.addDirection(
  Handedness.Right,
  Finger.Thumb,
  FingerDirection[FingerAxis.XY].DiagonalUpRight,
  0.8,
);

erase.addCurl(
  Handedness.Right,
  Finger.Index,
  FingerCurl.NoCurl,
  1.0,
  HandSide.Palm,
);
erase.addDirection(
  Handedness.Right,
  Finger.Index,
  FingerDirection[FingerAxis.XY].VerticalUp,
  0.8,
);

erase.addCurl(Handedness.Right, Finger.Middle, FingerCurl.NoCurl, 1.0);
erase.addDirection(
  Handedness.Right,
  Finger.Middle,
  FingerDirection[FingerAxis.XY].VerticalUp,
  0.8,
);

erase.addCurl(Handedness.Right, Finger.Ring, FingerCurl.FullCurl, 1.0);
erase.addCurl(Handedness.Right, Finger.Ring, FingerCurl.HalfCurl, 0.8);

erase.addCurl(Handedness.Right, Finger.Pinky, FingerCurl.FullCurl, 1.0);
erase.addCurl(Handedness.Right, Finger.Pinky, FingerCurl.HalfCurl, 0.8);

export default erase;
