import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
  HandSide,
  FingerAxis,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const ae = new GestureDescription("ae");

ae.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);
ae.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.HalfCurl, 1.0);

ae.addCurl(
  Handedness.Left,
  Finger.Index,
  FingerCurl.NoCurl,
  1.0,
  HandSide.Palm,
);
ae.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection[FingerAxis.XY].VerticalUp,
  0.8,
);

ae.addCurl(
  Handedness.Left,
  Finger.Middle,
  FingerCurl.FullCurl,
  1.0,
  HandSide.Palm,
);

ae.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1.0);

ae.addCurl(
  Handedness.Left,
  Finger.Pinky,
  FingerCurl.NoCurl,
  1.0,
  HandSide.Palm,
);
ae.addDirection(
  Handedness.Left,
  Finger.Pinky,
  FingerDirection[FingerAxis.XY].VerticalUp,
  0.8,
);

export default ae;
