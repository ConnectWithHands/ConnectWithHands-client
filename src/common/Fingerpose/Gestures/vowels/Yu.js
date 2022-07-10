import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
  HandSide,
  FingerAxis,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const yu = new GestureDescription("yu");

yu.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);
yu.addDirection(
  Handedness.Left,
  Finger.Thumb,
  FingerDirection[FingerAxis.XY].VerticalDown,
  0.8,
);

yu.addCurl(
  Handedness.Left,
  Finger.Index,
  FingerCurl.NoCurl,
  1.0,
  HandSide.Back,
);
yu.addCurl(
  Handedness.Left,
  Finger.Index,
  FingerCurl.HalfCurl,
  1.0,
  HandSide.Back,
);
yu.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection[FingerAxis.XY].VerticalDown,
  0.8,
);
yu.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection[FingerAxis.YZ].VerticalDown,
  0.8,
  FingerAxis.YZ,
);

yu.addCurl(Handedness.Left, Finger.Middle, FingerCurl.NoCurl, 1);
yu.addDirection(
  Handedness.Left,
  Finger.Middle,
  FingerDirection[FingerAxis.XY].VerticalDown,
  0.8,
);
yu.addDirection(
  Handedness.Left,
  Finger.Middle,
  FingerDirection[FingerAxis.YZ].VerticalDown,
  0.8,
  FingerAxis.YZ,
);

yu.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1);

yu.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.FullCurl, 1);

export default yu;
