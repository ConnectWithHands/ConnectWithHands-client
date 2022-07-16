import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
  HandSide,
  FingerAxis,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const ssangjieut = new GestureDescription("ssangjieut");

ssangjieut.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);
ssangjieut.addDirection(
  Handedness.Left,
  Finger.Thumb,
  FingerDirection[FingerAxis.XY].HorizontalRight,
  0.8,
);
ssangjieut.addDirection(
  Handedness.Left,
  Finger.Thumb,
  FingerDirection[FingerAxis.XY].DiagonalDownRight,
  0.8,
);

ssangjieut.addCurl(
  Handedness.Left,
  Finger.Index,
  FingerCurl.NoCurl,
  1.0,
  HandSide.Back,
);
ssangjieut.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection[FingerAxis.XY].VerticalDown,
  0.8,
);

ssangjieut.addCurl(Handedness.Left, Finger.Middle, FingerCurl.NoCurl, 1.0);
ssangjieut.addDirection(
  Handedness.Left,
  Finger.Middle,
  FingerDirection[FingerAxis.XY].VerticalDown,
  0.8,
);

ssangjieut.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1);
ssangjieut.addCurl(Handedness.Left, Finger.Ring, FingerCurl.HalfCurl, 0.8);

ssangjieut.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.FullCurl, 1);
ssangjieut.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.HalfCurl, 0.8);

export default ssangjieut;
