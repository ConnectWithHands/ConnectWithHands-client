import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const pieup = new GestureDescription("pieup");

pieup.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.HalfCurl, 1.0);
pieup.addDirection(
  Handedness.Left,
  Finger.Thumb,
  FingerDirection.DiagonalUpRight,
  1.0,
);
pieup.addDirection(
  Handedness.Left,
  Finger.Thumb,
  FingerDirection.HorizontalLeft,
  1.0,
);

pieup.addCurl(Handedness.Left, Finger.Index, FingerCurl.HalfCurl, 1.0);
pieup.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.VerticalUp,
  1.0,
);

pieup.addCurl(Handedness.Left, Finger.Middle, FingerCurl.FullCurl, 1.0);
pieup.addCurl(Handedness.Left, Finger.Middle, FingerCurl.HalfCurl, 0.8);
pieup.addDirection(
  Handedness.Left,
  Finger.Middle,
  FingerDirection.VerticalUp,
  1.0,
);

pieup.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1);
pieup.addCurl(Handedness.Left, Finger.Ring, FingerCurl.HalfCurl, 0.8);

pieup.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.FullCurl, 1);
pieup.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.HalfCurl, 0.8);

export default pieup;
