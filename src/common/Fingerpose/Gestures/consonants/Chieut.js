import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
  HandSide,
  FingerAxis,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const chieut = new GestureDescription("chieut");

chieut.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);
chieut.addDirection(
  Handedness.Left,
  Finger.Thumb,
  FingerDirection[FingerAxis.XY].DiagonalDownRight,
  0.8,
);
chieut.addDirection(
  Handedness.Left,
  Finger.Thumb,
  FingerDirection[FingerAxis.XY].HorizontalRight,
  0.8,
);

chieut.addCurl(Handedness.Left, Finger.Index, FingerCurl.NoCurl, 1.0);
chieut.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection[FingerAxis.XY].VerticalDown,
  0.8,
);

chieut.addCurl(Handedness.Left, Finger.Middle, FingerCurl.NoCurl, 1.0);
chieut.addDirection(
  Handedness.Left,
  Finger.Middle,
  FingerDirection[FingerAxis.XY].VerticalDown,
  0.8,
);

chieut.addCurl(Handedness.Left, Finger.Ring, FingerCurl.NoCurl, 1);
chieut.addDirection(
  Handedness.Left,
  Finger.Ring,
  FingerDirection[FingerAxis.XY].DiagonalDownLeft,
  0.8,
);
chieut.addDirection(
  Handedness.Left,
  Finger.Ring,
  FingerDirection[FingerAxis.XY].VerticalDown,
  0.8,
);

// chieut.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.HalfCurl, 1);
// chieut.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.NoCurl, 0.8);
// chieut.addDirection(
//   Handedness.Left,
//   Finger.Ring,
//   FingerDirection[FingerAxis.XY].VerticalDown,
//   0.8,
// );

export default chieut;
