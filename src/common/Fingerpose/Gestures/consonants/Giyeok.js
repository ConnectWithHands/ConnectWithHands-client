import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
  HandSide,
  FingerAxis,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const giyeok = new GestureDescription("giyeok");

giyeok.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);
giyeok.addDirection(
  Handedness.Left,
  Finger.Thumb,
  FingerDirection[FingerAxis.XY].HorizontalRight,
  0.8,
);
giyeok.addDirection(
  Handedness.Left,
  Finger.Thumb,
  FingerDirection[FingerAxis.XY].DiagonalDownRight,
  0.8,
);

giyeok.addCurl(
  Handedness.Left,
  Finger.Index,
  FingerCurl.NoCurl,
  1.0,
  HandSide.Back,
);
giyeok.addCurl(Handedness.Left, Finger.Index, FingerCurl.HalfCurl, 0.8);
giyeok.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection[FingerAxis.XY].VerticalDown,
  0.8,
);
giyeok.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection[FingerAxis.YZ].VerticalDown,
  0.8,
  FingerAxis.YZ,
);

giyeok.addCurl(Handedness.Left, Finger.Middle, FingerCurl.FullCurl, 1.0);

export default giyeok;
