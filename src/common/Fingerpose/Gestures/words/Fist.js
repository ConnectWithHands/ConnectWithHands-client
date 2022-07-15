import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
  HandSide,
  FingerAxis,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const fist = new GestureDescription("fist");

// thumb:
fist.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);

fist.addDirection(
  Handedness.Left,
  Finger.Thumb,
  FingerDirection[FingerAxis.XY].VerticalUp,
  0.8,
);
fist.addDirection(
  Handedness.Left,
  Finger.Thumb,
  FingerDirection[FingerAxis.XY].DiagonalUpRight,
  0.8,
);

// index:
fist.addCurl(Handedness.Left, Finger.Index, FingerCurl.FullCurl, 1.0);
fist.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection[FingerAxis.XY].VerticalUp,
  0.8,
);
fist.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection[FingerAxis.XY].DiagonalUpRight,
  0.8,
);

// middle:
fist.addCurl(Handedness.Left, Finger.Middle, FingerCurl.FullCurl, 1.0);
fist.addDirection(
  Handedness.Left,
  Finger.Middle,
  FingerDirection[FingerAxis.XY].VerticalUp,
  0.8,
);
fist.addDirection(
  Handedness.Left,
  Finger.Middle,
  FingerDirection[FingerAxis.XY].DiagonalUpRight,
  0.8,
);

// ring:
fist.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1.0);
fist.addDirection(
  Handedness.Left,
  Finger.Ring,
  FingerDirection[FingerAxis.XY].VerticalUp,
  0.8,
);
fist.addDirection(
  Handedness.Left,
  Finger.Ring,
  FingerDirection[FingerAxis.XY].DiagonalUpRight,
  0.8,
);

// pinky:
fist.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.FullCurl, 1.0);
fist.addDirection(
  Handedness.Left,
  Finger.Pinky,
  FingerDirection[FingerAxis.XY].VerticalUp,
  0.8,
);
fist.addDirection(
  Handedness.Left,
  Finger.Pinky,
  FingerDirection[FingerAxis.XY].DiagonalUpLeft,
  0.8,
);

export default fist;
