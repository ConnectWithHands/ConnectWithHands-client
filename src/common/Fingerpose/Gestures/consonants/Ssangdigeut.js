import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
  HandSide,
  FingerAxis,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const ssangdigeut = new GestureDescription("ssangdigeut");

ssangdigeut.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);

ssangdigeut.addCurl(Handedness.Left, Finger.Index, FingerCurl.NoCurl, 1.0);
ssangdigeut.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection[FingerAxis.XY].HorizontalRight,
  0.8,
);

ssangdigeut.addCurl(Handedness.Left, Finger.Middle, FingerCurl.NoCurl, 1.0);
ssangdigeut.addDirection(
  Handedness.Left,
  Finger.Middle,
  FingerDirection[FingerAxis.XY].HorizontalRight,
  0.8,
);

ssangdigeut.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1);
ssangdigeut.addCurl(Handedness.Left, Finger.Ring, FingerCurl.HalfCurl, 0.8);

ssangdigeut.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.FullCurl, 1);
ssangdigeut.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.HalfCurl, 0.8);

export default ssangdigeut;
