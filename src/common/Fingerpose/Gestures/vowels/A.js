import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
  FingerPosition,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const a = new GestureDescription("a");

a.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);
a.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.HalfCurl, 0.8);
a.addDirection(Handedness.Left, Finger.Thumb, FingerDirection.VerticalUp, 1.0);
a.addDirection(
  Handedness.Left,
  Finger.Thumb,
  FingerDirection.HorizontalLeft,
  0.8,
);

a.addCurl(
  Handedness.Left,
  Finger.Index,
  FingerCurl.NoCurl,
  1.0,
  FingerPosition.Palm,
);
a.addDirection(Handedness.Left, Finger.Index, FingerDirection.VerticalUp, 1.0);

a.addCurl(Handedness.Left, Finger.Middle, FingerCurl.HalfCurl, 1);
a.addCurl(Handedness.Left, Finger.Middle, FingerCurl.FullCurl, 0.8);

a.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1);

a.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.FullCurl, 1);

export default a;
