import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
  FingerPosition,
  FingerAxis,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const a = new GestureDescription("a");

a.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);
a.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.HalfCurl, 0.8);
a.addDirection(
  Handedness.Left,
  Finger.Thumb,
  FingerDirection[FingerAxis.XY].DiagonalUpLeft,
  0.8,
);
a.addDirection(
  Handedness.Left,
  Finger.Thumb,
  FingerDirection[FingerAxis.XY].VerticalUp,
  0.8,
);

a.addCurl(
  Handedness.Left,
  Finger.Index,
  FingerCurl.NoCurl,
  1.0,
  FingerPosition.Palm,
);
a.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection[FingerAxis.XY].VerticalUp,
  0.8,
);
a.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection[FingerAxis.YZ].VerticalUp,
  0.8,
  FingerAxis.YZ,
);

a.addCurl(Handedness.Left, Finger.Middle, FingerCurl.FullCurl, 1.0);

a.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1.0);

a.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.FullCurl, 1.0);

export default a;
