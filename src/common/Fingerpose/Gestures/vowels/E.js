import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
  HandSide,
  FingerAxis,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const e = new GestureDescription("e");

e.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.HalfCurl, 1.0);
e.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 0.8);

e.addCurl(Handedness.Left, Finger.Index, FingerCurl.NoCurl, 1.0, HandSide.Palm);
e.addCurl(
  Handedness.Left,
  Finger.Index,
  FingerCurl.HalfCurl,
  0.8,
  HandSide.Palm,
);
e.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection[FingerAxis.YZ].ForwardMiddle,
  0.8,
  FingerAxis.YZ,
);
e.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection[FingerAxis.YZ].ForwardUp,
  0.8,
  FingerAxis.YZ,
);

e.addCurl(Handedness.Left, Finger.Middle, FingerCurl.FullCurl, 1.0);
e.addCurl(Handedness.Left, Finger.Middle, FingerCurl.HalfCurl, 1.0);

e.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1.0);
e.addCurl(Handedness.Left, Finger.Ring, FingerCurl.HalfCurl, 1.0);

e.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.FullCurl, 1.0);
e.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.HalfCurl, 1.0);
e.addDirection(
  Handedness.Left,
  Finger.Pinky,
  FingerDirection[FingerAxis.YZ].ForwardMiddle,
  0.8,
  FingerAxis.YZ,
);

export default e;
