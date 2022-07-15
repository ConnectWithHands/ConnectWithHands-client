import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
  HandSide,
  FingerAxis,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

// describe victory gesture ✌️
const hello = new GestureDescription("hello");

hello.addNumOfHands(2);

// thumb:
hello.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);

hello.addDirection(
  Handedness.Left,
  Finger.Thumb,
  FingerDirection[FingerAxis.XY].VerticalUp,
  0.8,
);
hello.addDirection(
  Handedness.Left,
  Finger.Thumb,
  FingerDirection[FingerAxis.XY].DiagonalUpRight,
  0.8,
);

// index:
hello.addCurl(Handedness.Left, Finger.Index, FingerCurl.FullCurl, 1.0);
hello.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection[FingerAxis.XY].VerticalUp,
  0.8,
);
hello.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection[FingerAxis.XY].DiagonalUpRight,
  0.8,
);

// middle:
hello.addCurl(Handedness.Left, Finger.Middle, FingerCurl.FullCurl, 1.0);
hello.addDirection(
  Handedness.Left,
  Finger.Middle,
  FingerDirection[FingerAxis.XY].VerticalUp,
  0.8,
);
hello.addDirection(
  Handedness.Left,
  Finger.Middle,
  FingerDirection[FingerAxis.XY].DiagonalUpRight,
  0.8,
);

// ring:
hello.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1.0);
hello.addDirection(
  Handedness.Left,
  Finger.Ring,
  FingerDirection[FingerAxis.XY].VerticalUp,
  0.8,
);
hello.addDirection(
  Handedness.Left,
  Finger.Ring,
  FingerDirection[FingerAxis.XY].DiagonalUpRight,
  0.8,
);

// pinky:
hello.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.FullCurl, 1.0);
hello.addDirection(
  Handedness.Left,
  Finger.Pinky,
  FingerDirection[FingerAxis.XY].VerticalUp,
  0.8,
);
hello.addDirection(
  Handedness.Left,
  Finger.Pinky,
  FingerDirection[FingerAxis.XY].DiagonalUpLeft,
  0.8,
);

// thumb:
hello.addCurl(Handedness.Right, Finger.Thumb, FingerCurl.NoCurl, 1.0);

hello.addDirection(
  Handedness.Right,
  Finger.Thumb,
  FingerDirection.VerticalUp,
  0.8,
);
hello.addDirection(
  Handedness.Right,
  Finger.Thumb,
  FingerDirection[FingerAxis.XY].DiagonalUpLeft,
  0.8,
);

// index:
hello.addCurl(Handedness.Right, Finger.Index, FingerCurl.FullCurl, 1.0);
hello.addDirection(
  Handedness.Right,
  Finger.Index,
  FingerDirection[FingerAxis.XY].VerticalUp,
  0.8,
);
hello.addDirection(
  Handedness.Right,
  Finger.Index,
  FingerDirection[FingerAxis.XY].DiagonalUpLeft,
  0.8,
);

// middle:
hello.addCurl(Handedness.Right, Finger.Middle, FingerCurl.FullCurl, 1.0);
hello.addDirection(
  Handedness.Right,
  Finger.Middle,
  FingerDirection[FingerAxis.XY].VerticalUp,
  0.8,
);
hello.addDirection(
  Handedness.Right,
  Finger.Middle,
  FingerDirection[FingerAxis.XY].DiagonalUpLeft,
  0.8,
);

// ring:
hello.addCurl(Handedness.Right, Finger.Ring, FingerCurl.FullCurl, 1.0);
hello.addDirection(
  Handedness.Right,
  Finger.Ring,
  FingerDirection[FingerAxis.XY].VerticalUp,
  0.8,
);
hello.addDirection(
  Handedness.Right,
  Finger.Ring,
  FingerDirection[FingerAxis.XY].DiagonalUpLeft,
  0.8,
);

// pinky:
hello.addCurl(Handedness.Right, Finger.Pinky, FingerCurl.FullCurl, 1.0);
hello.addDirection(
  Handedness.Right,
  Finger.Pinky,
  FingerDirection[FingerAxis.XY].VerticalUp,
  0.8,
);
hello.addDirection(
  Handedness.Right,
  Finger.Pinky,
  FingerDirection[FingerAxis.XY].DiagonalUpLeft,
  0.8,
);

export default hello;
