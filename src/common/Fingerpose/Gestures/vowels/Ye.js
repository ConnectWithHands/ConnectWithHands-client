import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
  HandSide,
  FingerAxis,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const ye = new GestureDescription("ye");

ye.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.HalfCurl, 1.0);
ye.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 0.8);

ye.addCurl(
  Handedness.Left,
  Finger.Index,
  FingerCurl.NoCurl,
  1.0,
  HandSide.Back,
);
ye.addCurl(
  Handedness.Left,
  Finger.Index,
  FingerCurl.HalfCurl,
  0.8,
  HandSide.Back,
);
ye.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection[FingerAxis.YZ].ForwardMiddle,
  0.8,
  FingerAxis.YZ,
);
ye.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection[FingerAxis.YZ].ForwardUp,
  0.8,
  FingerAxis.YZ,
);

ye.addCurl(Handedness.Left, Finger.Middle, FingerCurl.NoCurl, 1.0);
ye.addCurl(Handedness.Left, Finger.Middle, FingerCurl.HalfCurl, 1.0);
ye.addDirection(
  Handedness.Left,
  Finger.Middle,
  FingerDirection[FingerAxis.YZ].ForwardMiddle,
  0.8,
  FingerAxis.YZ,
);

ye.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1.0);
ye.addCurl(Handedness.Left, Finger.Ring, FingerCurl.HalfCurl, 1.0);

ye.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.HalfCurl, 1.0);
ye.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.NoCurl, 1.0);
ye.addDirection(
  Handedness.Left,
  Finger.Pinky,
  FingerDirection[FingerAxis.YZ].ForwardMiddle,
  0.8,
  FingerAxis.YZ,
);

export default ye;
