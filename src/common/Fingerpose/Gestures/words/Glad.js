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

glad.addNumOfHands(2);

// thumb:
glad.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);
glad.addDirection(
  Handedness.Left,
  Finger.Thumb,
  FingerDirection[FingerAxis.XY].VerticalUp,
  0.8,
);
glad.addCurl(Handedness.Right, Finger.Thumb, FingerCurl.NoCurl, 1.0);
glad.addDirection(
  Handedness.Right,
  Finger.Index,
  FingerDirection[FingerAxis.XY].VerticalUp,
  0.8,
);

// index:
glad.addCurl(
  Handedness.Left,
  Finger.Index,
  FingerCurl.NoCurl,
  1.0,
  HandSide.Back,
);
glad.addCurl(
  Handedness.Left,
  Finger.Index,
  FingerCurl.HalfCurl,
  0.8,
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
  Finger.Index,
  FingerDirection[FingerAxis.XY].DiagonalUpRight,
  0.8,
);

glad.addCurl(
  Handedness.Right,
  Finger.Index,
  FingerCurl.NoCurl,
  1.0,
  HandSide.Back,
);
glad.addCurl(
  Handedness.Right,
  Finger.Index,
  FingerCurl.HalfCurl,
  0.8,
  HandSide.Back,
);
glad.addDirection(
  Handedness.Right,
  Finger.Index,
  FingerDirection[FingerAxis.XY].HorizontalLeft,
  0.8,
);
glad.addDirection(
  Handedness.Right,
  Finger.Index,
  FingerDirection[FingerAxis.XY].DiagonalUpLeft,
  0.8,
);

// middle:
for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  glad.addCurl(Handedness.Left, finger, FingerCurl.FullCurl, 1.0);
  glad.addCurl(Handedness.Left, finger, FingerCurl.HalfCurl, 1.0);
  glad.addCurl(Handedness.Right, finger, FingerCurl.FullCurl, 1.0);
  glad.addCurl(Handedness.Right, finger, FingerCurl.HalfCurl, 1.0);
}

export default glad;
