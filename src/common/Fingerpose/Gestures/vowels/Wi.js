import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
  HandSide,
  FingerAxis,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const wi = new GestureDescription("wi");

wi.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);

wi.addCurl(
  Handedness.Left,
  Finger.Index,
  FingerCurl.NoCurl,
  1.0,
  HandSide.Back,
);
wi.addCurl(
  Handedness.Left,
  Finger.Index,
  FingerCurl.HalfCurl,
  1.0,
  HandSide.Back,
);
wi.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection[FingerAxis.XY].VerticalDown,
  0.8,
);
wi.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection[FingerAxis.XY].DiagonalDownRight,
  0.8,
);

wi.addCurl(Handedness.Left, Finger.Middle, FingerCurl.FullCurl, 1.0);

wi.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1.0);

wi.addCurl(
  Handedness.Left,
  Finger.Pinky,
  FingerCurl.NoCurl,
  1.0,
  HandSide.Back,
);
wi.addCurl(
  Handedness.Left,
  Finger.Pinky,
  FingerCurl.HalfCurl,
  1.0,
  HandSide.Back,
);
wi.addDirection(
  Handedness.Left,
  Finger.Pinky,
  FingerDirection[FingerAxis.XY].VerticalDown,
  0.8,
);

export default wi;
