import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
  FingerPosition,
  FingerAxis,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const ieung = new GestureDescription("ieung");

ieung.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);
ieung.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection[FingerAxis.XY].DiagonalUpRight,
  0.8,
);

ieung.addCurl(Handedness.Left, Finger.Index, FingerCurl.FullCurl, 1.0);
ieung.addCurl(Handedness.Left, Finger.Index, FingerCurl.HalfCurl, 1.0);
ieung.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection[FingerAxis.XY].DiagonalUpRight,
  0.8,
);

ieung.addCurl(Handedness.Left, Finger.Middle, FingerCurl.NoCurl, 1.0);
ieung.addDirection(
  Handedness.Left,
  Finger.Middle,
  FingerDirection[FingerAxis.XY].VerticalUp,
  0.8,
);

ieung.addCurl(Handedness.Left, Finger.Ring, FingerCurl.NoCurl, 1);
ieung.addDirection(
  Handedness.Left,
  Finger.Ring,
  FingerDirection[FingerAxis.XY].VerticalUp,
  0.8,
);

ieung.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.NoCurl, 1);
ieung.addDirection(
  Handedness.Left,
  Finger.Pinky,
  FingerDirection[FingerAxis.XY].VerticalUp,
  0.8,
);

export default ieung;
