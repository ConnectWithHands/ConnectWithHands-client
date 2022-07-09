import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
  FingerPosition,
  FingerAxis,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const giyeok = new GestureDescription("giyeok");

giyeok.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);
giyeok.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection[FingerAxis.XY].HorizontalLeft,
  0.8,
);
// giyeok.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.8);
giyeok.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection[FingerAxis.XY].DiagonalDownLeft,
  0.8,
);

giyeok.addCurl(
  Handedness.Left,
  Finger.Index,
  FingerCurl.NoCurl,
  1.0,
  FingerPosition.Back,
);
giyeok.addCurl(Handedness.Left, Finger.Index, FingerCurl.HalfCurl, 0.7);
giyeok.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection[FingerAxis.XY].VerticalDown,
  0.8,
);

giyeok.addCurl(Handedness.Left, Finger.Middle, FingerCurl.FullCurl, 1);

giyeok.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1);

giyeok.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.FullCurl, 1);

export default giyeok;
