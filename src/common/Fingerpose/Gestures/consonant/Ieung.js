import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const ieung = new GestureDescription("ieung");

ieung.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);
ieung.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.DiagonalUpRight,
  1.0,
);

ieung.addCurl(Handedness.Left, Finger.Index, FingerCurl.FullCurl, 1.0);
ieung.addCurl(Handedness.Left, Finger.Index, FingerCurl.HalfCurl, 1.0);
ieung.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.DiagonalUpRight,
  1.0,
);

ieung.addCurl(Handedness.Left, Finger.Middle, FingerCurl.NoCurl, 1.0);
ieung.addDirection(
  Handedness.Left,
  Finger.Middle,
  FingerDirection.DiagonalUpRight,
  1.0,
);

ieung.addCurl(Handedness.Left, Finger.Ring, FingerCurl.NoCurl, 1);
ieung.addDirection(
  Handedness.Left,
  Finger.Ring,
  FingerDirection.VerticalUp,
  1.0,
);

ieung.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.NoCurl, 1);
ieung.addDirection(
  Handedness.Left,
  Finger.Pinky,
  FingerDirection.VerticalUp,
  1.0,
);

export default ieung;
