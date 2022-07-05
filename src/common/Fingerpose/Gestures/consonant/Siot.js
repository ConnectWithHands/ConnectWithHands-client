import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const siot = new GestureDescription("siot");

siot.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);

siot.addCurl(Handedness.Left, Finger.Index, FingerCurl.NoCurl, 1.0);
siot.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.VerticalDown,
  1.0,
);
siot.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.DiagonalDownRight,
  0.8,
);

siot.addCurl(Handedness.Left, Finger.Middle, FingerCurl.NoCurl, 1.0);
siot.addCurl(Handedness.Left, Finger.Middle, FingerCurl.HalfCurl, 0.8);
siot.addDirection(
  Handedness.Lefy,
  Finger.Middle,
  FingerDirection.VerticalDown,
  1.0,
);

siot.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1);

siot.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.FullCurl, 1);

export default siot;
