import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
  HandSide,
  FingerAxis,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const ssangsiot = new GestureDescription("ssangsiot");

ssangsiot.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);
ssangsiot.addDirection(
  Handedness.Left,
  Finger.Thumb,
  FingerDirection[FingerAxis.XY].DiagonalDownLeft,
  0.8,
);

ssangsiot.addCurl(
  Handedness.Left,
  Finger.Index,
  FingerCurl.NoCurl,
  1.0,
  HandSide.Back,
);
ssangsiot.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection[FingerAxis.XY].DiagonalDownRight,
  1.0,
);
ssangsiot.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection[FingerAxis.XY].VerticalDown,
  0.8,
);

ssangsiot.addCurl(Handedness.Left, Finger.Middle, FingerCurl.NoCurl, 1.0);
ssangsiot.addCurl(Handedness.Left, Finger.Middle, FingerCurl.HalfCurl, 0.8);
ssangsiot.addDirection(
  Handedness.Lefy,
  Finger.Middle,
  FingerDirection[FingerAxis.XY].VerticalDown,
  1.0,
);

ssangsiot.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1);
ssangsiot.addCurl(Handedness.Left, Finger.Ring, FingerCurl.HalfCurl, 1);

ssangsiot.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.FullCurl, 1);
ssangsiot.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.HalfCurl, 1);

export default ssangsiot;
