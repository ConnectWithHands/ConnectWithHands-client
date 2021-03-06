import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
  HandSide,
  FingerAxis,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const eo = new GestureDescription("eo");

eo.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);

eo.addCurl(Handedness.Left, Finger.Index, FingerCurl.NoCurl, 1.0);
eo.addCurl(Handedness.Left, Finger.Index, FingerCurl.HalfCurl, 0.8);
eo.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection[FingerAxis.YZ].ForwardMiddle,
  0.8,
  FingerAxis.YZ,
);

eo.addCurl(Handedness.Left, Finger.Middle, FingerCurl.FullCurl, 1.0);
eo.addCurl(Handedness.Left, Finger.Middle, FingerCurl.HalfCurl, 1.0);

eo.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1.0);

eo.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.FullCurl, 1.0);

export default eo;
