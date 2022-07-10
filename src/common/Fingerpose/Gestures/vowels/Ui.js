import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
  HandSide,
  FingerAxis,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const ui = new GestureDescription("ui");

ui.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.HalfCurl, 1.0);
ui.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 0.9);

ui.addCurl(
  Handedness.Left,
  Finger.Index,
  FingerCurl.NoCurl,
  1.0,
  HandSide.Back,
);
ui.addCurl(
  Handedness.Left,
  Finger.Index,
  FingerCurl.HalfCurl,
  0.9,
  HandSide.Back,
);
ui.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection[FingerAxis.XY].HorizontalRight,
  0.8,
);

ui.addCurl(Handedness.Left, Finger.Middle, FingerCurl.HalfCurl, 1);
ui.addCurl(Handedness.Left, Finger.Middle, FingerCurl.FullCurl, 0.8);

ui.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1);
ui.addCurl(Handedness.Left, Finger.Ring, FingerCurl.HalfCurl, 1);

ui.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.NoCurl, 1);
ui.addDirection(
  Handedness.Left,
  Finger.Pinky,
  FingerDirection[FingerAxis.XY].HorizontalRight,
  0.8,
);

export default ui;
