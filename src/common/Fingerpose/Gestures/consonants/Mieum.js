import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
  HandSide,
  FingerAxis,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const mieum = new GestureDescription("mieum");

mieum.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.HalfCurl, 1.0);

mieum.addCurl(Handedness.Left, Finger.Index, FingerCurl.HalfCurl, 1.0);
mieum.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection[FingerAxis.XY].VerticalUp,
  1.0,
);
mieum.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection[FingerAxis.XY].DiagonalDownRight,
  0.8,
);

mieum.addCurl(Handedness.Left, Finger.Middle, FingerCurl.HalfCurl, 1.0);
mieum.addDirection(
  Handedness.Left,
  Finger.Middle,
  FingerDirection[FingerAxis.XY].VerticalUp,
  1.0,
);
mieum.addDirection(
  Handedness.Left,
  Finger.Middle,
  FingerDirection[FingerAxis.XY].DiagonalUpRight,
  0.8,
);

mieum.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1);

mieum.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.FullCurl, 1);

export default mieum;
