import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const tieut = new GestureDescription("tieut");

tieut.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);

tieut.addCurl(Handedness.Left, Finger.Index, FingerCurl.NoCurl, 1.0);
tieut.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.DiagonalUpRight,
  1.0,
);
tieut.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.HorizontalRight,
  0.8,
);

tieut.addCurl(Handedness.Left, Finger.Middle, FingerCurl.NoCurl, 1.0);
tieut.addDirection(
  Handedness.Left,
  Finger.Middle,
  FingerDirection.HorizontalRight,
  1.0,
);

tieut.addCurl(Handedness.Left, Finger.Ring, FingerCurl.NoCurl, 1);
tieut.addCurl(Handedness.Left, Finger.Ring, FingerCurl.HalfCurl, 1);
tieut.addDirection(
  Handedness.Left,
  Finger.Middle,
  FingerDirection.HorizontalRight,
  1.0,
);

tieut.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.FullCurl, 1);
tieut.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.HalfCurl, 0.8);

export default tieut;
