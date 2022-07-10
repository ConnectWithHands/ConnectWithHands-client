import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
  HandSide,
  FingerAxis,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const yae = new GestureDescription("yae");

yae.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);
yae.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.HalfCurl, 1.0);

yae.addCurl(
  Handedness.Left,
  Finger.Index,
  FingerCurl.NoCurl,
  1.0,
  HandSide.Palm,
);
yae.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection[FingerAxis.XY].VerticalUp,
  0.8,
);

yae.addCurl(
  Handedness.Left,
  Finger.Middle,
  FingerCurl.NoCurl,
  1.0,
  HandSide.Palm,
);
yae.addDirection(
  Handedness.Left,
  Finger.Middle,
  FingerDirection.VerticalUp,
  0.8,
);

yae.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1.0);

yae.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.NoCurl, 1.0);
yae.addDirection(
  Handedness.Left,
  Finger.Pinky,
  FingerDirection[FingerAxis.XY].VerticalUp,
  0.8,
);

export default yae;
