import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
  HandSide,
  FingerAxis,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const ya = new GestureDescription("ya");

ya.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);

ya.addCurl(
  Handedness.Left,
  Finger.Index,
  FingerCurl.NoCurl,
  1.0,
  HandSide.Palm,
);
ya.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection[FingerAxis.XY].VerticalUp,
  0.8,
);

ya.addCurl(
  Handedness.Left,
  Finger.Middle,
  FingerCurl.NoCurl,
  1.0,
  HandSide.Palm,
);
ya.addDirection(
  Handedness.Left,
  Finger.Middle,
  FingerDirection[FingerAxis.XY].VerticalUp,
  0.8,
);

ya.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1.0);

ya.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.FullCurl, 1.0);

export default ya;
