import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
  HandSide,
  FingerAxis,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const siot = new GestureDescription("siot");

siot.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);
siot.addDirection(
  Handedness.Left,
  Finger.Thumb,
  FingerDirection[FingerAxis.XY].DiagonalDownLeft,
  0.8,
);

siot.addCurl(
  Handedness.Left,
  Finger.Index,
  FingerCurl.NoCurl,
  1.0,
  HandSide.Back,
);
siot.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection[FingerAxis.XY].DiagonalDownRight,
  1.0,
);
siot.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection[FingerAxis.XY].VerticalDown,
  0.8,
);

siot.addCurl(Handedness.Left, Finger.Middle, FingerCurl.NoCurl, 1.0);
siot.addCurl(Handedness.Left, Finger.Middle, FingerCurl.HalfCurl, 0.8);
siot.addDirection(
  Handedness.Lefy,
  Finger.Middle,
  FingerDirection[FingerAxis.XY].VerticalDown,
  1.0,
);

siot.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1);
siot.addCurl(Handedness.Left, Finger.Ring, FingerCurl.HalfCurl, 1);

siot.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.FullCurl, 1);
siot.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.HalfCurl, 1);

export default siot;
