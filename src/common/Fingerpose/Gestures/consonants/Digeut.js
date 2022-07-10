import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
  HandSide,
  FingerAxis,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const diguet = new GestureDescription("diguet");

diguet.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);

diguet.addCurl(Handedness.Left, Finger.Index, FingerCurl.NoCurl, 1.0);
diguet.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection[FingerAxis.XY].HorizontalRight,
  0.8,
);

diguet.addCurl(Handedness.Left, Finger.Middle, FingerCurl.NoCurl, 1.0);
diguet.addDirection(
  Handedness.Left,
  Finger.Middle,
  FingerDirection[FingerAxis.XY].HorizontalRight,
  0.8,
);

diguet.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1);
diguet.addCurl(Handedness.Left, Finger.Ring, FingerCurl.HalfCurl, 0.8);

diguet.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.FullCurl, 1);
diguet.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.HalfCurl, 0.8);

export default diguet;
