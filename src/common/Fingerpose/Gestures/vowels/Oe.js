import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
  FingerPosition,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const oe = new GestureDescription("oe");

oe.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.HalfCurl, 1.0);
oe.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 0.8);
oe.addDirection(
  Handedness.Left,
  Finger.Thumb,
  FingerDirection.DiagonalUpRight,
  1.0,
);
oe.addDirection(
  Handedness.Left,
  Finger.Thumb,
  FingerDirection.HorizontalRight,
  0.8,
);

oe.addCurl(
  Handedness.Left,
  Finger.Index,
  FingerCurl.NoCurl,
  1.0,
  FingerPosition.Back,
);
oe.addDirection(Handedness.Left, Finger.Index, FingerDirection.VerticalUp, 1.0);
oe.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.DiagonalUpRight,
  0.8,
);

oe.addCurl(
  Handedness.Left,
  Finger.Middle,
  FingerCurl.FullCurl,
  1,
  FingerPosition.Back,
);
oe.addCurl(
  Handedness.Left,
  Finger.Middle,
  FingerCurl.HalfCurl,
  0.8,
  FingerPosition.Back,
);

oe.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1);
oe.addCurl(Handedness.Left, Finger.Ring, FingerCurl.HalfCurl, 1);

oe.addCurl(
  Handedness.Left,
  Finger.Pinky,
  FingerCurl.NoCurl,
  1,
  FingerPosition.Back,
);

export default oe;
