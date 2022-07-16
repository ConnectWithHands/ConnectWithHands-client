import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
  HandSide,
  FingerAxis,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const jieut = new GestureDescription("jieut");

jieut.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);
jieut.addDirection(
  Handedness.Left,
  Finger.Thumb,
  FingerDirection[FingerAxis.XY].HorizontalRight,
  0.8,
);
jieut.addDirection(
  Handedness.Left,
  Finger.Thumb,
  FingerDirection[FingerAxis.XY].DiagonalDownRight,
  0.8,
);

jieut.addCurl(
  Handedness.Left,
  Finger.Index,
  FingerCurl.NoCurl,
  1.0,
  HandSide.Back,
);
jieut.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection[FingerAxis.XY].VerticalDown,
  0.8,
);
jieut.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection[FingerAxis.YZ].VerticalDown,
  0.8,
  FingerAxis.YZ,
);

jieut.addCurl(Handedness.Left, Finger.Middle, FingerCurl.NoCurl, 1.0);
jieut.addCurl(Handedness.Left, Finger.Middle, FingerCurl.HalfCurl, 0.8);
jieut.addDirection(
  Handedness.Left,
  Finger.Middle,
  FingerDirection[FingerAxis.XY].VerticalDown,
  0.8,
);

jieut.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1);
jieut.addCurl(Handedness.Left, Finger.Ring, FingerCurl.HalfCurl, 0.8);

export default jieut;
