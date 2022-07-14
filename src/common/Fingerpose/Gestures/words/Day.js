import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
  HandSide,
  FingerAxis,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const day = new GestureDescription("day");

// thumb:
day.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);
day.addCurl(Handedness.Right, Finger.Thumb, FingerCurl.NoCurl, 1.0);

day.addCurl(
  Handedness.Left,
  Finger.Index,
  FingerCurl.NoCurl,
  1.0,
  HandSide.Palm,
);
day.addCurl(
  Handedness.Right,
  Finger.Index,
  FingerCurl.NoCurl,
  0.8,
  HandSide.Palm,
);
day.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection[FingerAxis.XY].DiagonalUpRight,
  0.8,
);
day.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection[FingerAxis.XY].VerticalUp,
  0.8,
);
day.addDirection(
  Handedness.Right,
  Finger.Index,
  FingerDirection[FingerAxis.XY].DiagonalUpLeft,
  0.8,
);
day.addDirection(
  Handedness.Right,
  Finger.Index,
  FingerDirection[FingerAxis.XY].VerticalUp,
  0.8,
);

for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  day.addCurl(Handedness.Left, finger, FingerCurl.FullCurl, 1.0);
  day.addCurl(Handedness.Left, finger, FingerCurl.HalfCurl, 1.0);
  day.addDirection(
    Handedness.Left,
    finger,
    FingerDirection[FingerAxis.XY].VerticalUp,
    0.8,
  );

  day.addCurl(Handedness.Right, finger, FingerCurl.FullCurl, 1.0);
  day.addCurl(Handedness.Right, finger, FingerCurl.HalfCurl, 1.0);
  day.addDirection(
    Handedness.Right,
    finger,
    FingerDirection[FingerAxis.XY].VerticalUp,
    0.8,
  );
}

export default day;
