import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
  HandSide,
  FingerAxis,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const miuem = new GestureDescription("miuem");

miuem.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.HalfCurl, 1.0);

miuem.addCurl(Handedness.Left, Finger.Index, FingerCurl.HalfCurl, 1.0);
miuem.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection[FingerAxis.XY].VerticalUp,
  1.0,
);
miuem.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection[FingerAxis.XY].DiagonalDownRight,
  0.8,
);

miuem.addCurl(Handedness.Left, Finger.Middle, FingerCurl.HalfCurl, 1.0);
miuem.addDirection(
  Handedness.Left,
  Finger.Middle,
  FingerDirection[FingerAxis.XY].VerticalUp,
  1.0,
);
miuem.addDirection(
  Handedness.Left,
  Finger.Middle,
  FingerDirection[FingerAxis.XY].DiagonalUpRight,
  0.8,
);

miuem.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1);

miuem.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.FullCurl, 1);

export default miuem;
