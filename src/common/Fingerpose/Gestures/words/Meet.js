import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
  HandSide,
  FingerAxis,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const meet = new GestureDescription("meet");

// thumb:
meet.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);

// index:
meet.addCurl(Handedness.Left, Finger.Index, FingerCurl.NoCurl, 1.0);
meet.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection[FingerAxis.XY].VerticalUp,
  0.8,
);

// middle:
meet.addCurl(Handedness.Left, Finger.Middle, FingerCurl.FullCurl, 1.0);

// ring:
meet.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1.0);

// pinky:
meet.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.FullCurl, 1.0);

// thumb:
meet.addCurl(Handedness.Right, Finger.Thumb, FingerCurl.NoCurl, 1.0);

// index:
meet.addCurl(Handedness.Right, Finger.Index, FingerCurl.NoCurl, 1.0);
meet.addDirection(
  Handedness.Right,
  Finger.Index,
  FingerDirection[FingerAxis.XY].VerticalUp,
  0.8,
);

// middle:
meet.addCurl(Handedness.Right, Finger.Middle, FingerCurl.FullCurl, 1.0);

// ring:
meet.addCurl(Handedness.Right, Finger.Ring, FingerCurl.FullCurl, 1.0);

// pinky:
meet.addCurl(Handedness.Right, Finger.Pinky, FingerCurl.FullCurl, 1.0);

export default meet;
