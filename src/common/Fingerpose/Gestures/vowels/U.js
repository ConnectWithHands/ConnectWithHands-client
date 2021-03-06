import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
  HandSide,
  FingerAxis,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const u = new GestureDescription("u");

u.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);
u.addDirection(
  Handedness.Left,
  Finger.Thumb,
  FingerDirection[FingerAxis.XY].VerticalDown,
  0.8,
);

u.addCurl(Handedness.Left, Finger.Index, FingerCurl.NoCurl, 1.0, HandSide.Back);
u.addCurl(
  Handedness.Left,
  Finger.Index,
  FingerCurl.HalfCurl,
  0.8,
  HandSide.Back,
);
u.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection[FingerAxis.XY].VerticalDown,
  0.8,
);
u.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection[FingerAxis.YZ].VerticalDown,
  0.8,
  FingerAxis.YZ,
);

u.addCurl(Handedness.Left, Finger.Middle, FingerCurl.FullCurl, 1);

u.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1);

u.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.FullCurl, 1);

export default u;
