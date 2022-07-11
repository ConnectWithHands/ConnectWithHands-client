import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
  HandSide,
  FingerAxis,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const nieun = new GestureDescription("nieun");

nieun.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);
nieun.addDirection(
  Handedness.Left,
  Finger.Thumb,
  FingerDirection[FingerAxis.XY].VerticalUp,
  1.0,
);
nieun.addDirection(
  Handedness.Left,
  Finger.Thumb,
  FingerDirection[FingerAxis.XY].DiagonalUpRight,
  0.8,
);

nieun.addCurl(
  Handedness.Left,
  Finger.Index,
  FingerCurl.NoCurl,
  1.0,
  HandSide.Back,
);
nieun.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection[FingerAxis.XY].HorizontalRight,
  0.8,
);

nieun.addCurl(Handedness.Left, Finger.Middle, FingerCurl.FullCurl, 1);
nieun.addCurl(Handedness.Left, Finger.Middle, FingerCurl.HalfCurl, 0.8);

nieun.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1);
nieun.addCurl(Handedness.Left, Finger.Ring, FingerCurl.HalfCurl, 0.8);

nieun.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.FullCurl, 1);
nieun.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.HalfCurl, 0.8);

export default nieun;
