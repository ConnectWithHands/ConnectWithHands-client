import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
  HandSide,
  FingerAxis,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const glad = new GestureDescription("glad");

// thumb:
glad.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.HalfCurl, 1.0);
glad.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 0.8);
glad.addCurl(Handedness.Right, Finger.Thumb, FingerCurl.HalfCurl, 1.0);
glad.addCurl(Handedness.Right, Finger.Thumb, FingerCurl.NoCurl, 0.8);

// index:
glad.addCurl(Handedness.Left, Finger.Index, FingerCurl.NoCurl, 1.0);
glad.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection[FingerAxis.XY].VerticalUp,
  0.8,
);

// middle:
glad.addCurl(
  Handedness.Left,
  Finger.Middle,
  FingerCurl.HalfCurl,
  1.0,
  HandSide.Back,
);
glad.addCurl(
  Handedness.Right,
  Finger.Middle,
  FingerCurl.HalfCurl,
  1.0,
  HandSide.Back,
);
glad.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection[FingerAxis.XY].HorizontalRight,
  0.8,
);
glad.addDirection(
  Handedness.Left,
  Finger.Right,
  FingerDirection[FingerAxis.XY].HorizontalLeft,
  0.8,
);

// ring:
glad.addCurl(Handedness.Left, Finger.Ring, FingerCurl.HalfCurl, 1.0);
glad.addCurl(Handedness.Right, Finger.Ring, FingerCurl.HalfCurl, 1.0);

// pinky:
glad.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.HalfCurl, 1.0);
glad.addCurl(Handedness.Right, Finger.Pinky, FingerCurl.HalfCurl, 1.0);

export default glad;
