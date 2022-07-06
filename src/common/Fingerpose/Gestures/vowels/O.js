import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
  FingerPosition,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const o = new GestureDescription("o");

o.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.HalfCurl, 1.0);
o.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 0.8);
o.addDirection(
  Handedness.Left,
  Finger.Thumb,
  FingerDirection.DiagonalUpRight,
  1.0,
);
o.addDirection(
  Handedness.Left,
  Finger.Thumb,
  FingerDirection.HorizontalRight,
  0.8,
);

o.addCurl(
  Handedness.Left,
  Finger.Index,
  FingerCurl.NoCurl,
  1.0,
  FingerPosition.Back,
);
o.addDirection(Handedness.Left, Finger.Index, FingerDirection.VerticalUp, 1.0);
o.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.DiagonalUpRight,
  0.8,
);

o.addCurl(
  Handedness.Left,
  Finger.Middle,
  FingerCurl.FullCurl,
  1,
  FingerPosition.Back,
);
o.addCurl(
  Handedness.Left,
  Finger.Middle,
  FingerCurl.HalfCurl,
  0.8,
  FingerPosition.Back,
);

o.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1);
o.addCurl(Handedness.Left, Finger.Ring, FingerCurl.HalfCurl, 1);

o.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.FullCurl, 1);
o.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.HalfCurl, 1);

export default o;
