import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
  HandSide,
  FingerAxis,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const ssanggiyeok = new GestureDescription("ssanggiyeok");

ssanggiyeok.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);
ssanggiyeok.addDirection(
  Handedness.Left,
  Finger.Thumb,
  FingerDirection[FingerAxis.XY].HorizontalRight,
  0.8,
);
ssanggiyeok.addDirection(
  Handedness.Left,
  Finger.Thumb,
  FingerDirection[FingerAxis.XY].DiagonalDownRight,
  0.8,
);

ssanggiyeok.addCurl(
  Handedness.Left,
  Finger.Index,
  FingerCurl.NoCurl,
  1.0,
  HandSide.Back,
);
ssanggiyeok.addCurl(Handedness.Left, Finger.Index, FingerCurl.HalfCurl, 0.8);
ssanggiyeok.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection[FingerAxis.XY].VerticalDown,
  0.8,
);
ssanggiyeok.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection[FingerAxis.YZ].VerticalDown,
  0.8,
  FingerAxis.YZ,
);

ssanggiyeok.addCurl(Handedness.Left, Finger.Middle, FingerCurl.FullCurl, 1.0);

export default ssanggiyeok;
