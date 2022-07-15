import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
  HandSide,
  FingerAxis,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const yeo = new GestureDescription("yeo");

yeo.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);

yeo.addCurl(Handedness.Left, Finger.Index, FingerCurl.NoCurl, 1.0);
yeo.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection[FingerAxis.YZ].ForwardMiddle,
  0.8,
  FingerAxis.YZ,
);

yeo.addCurl(Handedness.Left, Finger.Middle, FingerCurl.NoCurl, 1);
yeo.addCurl(
  Handedness.Left,
  Finger.Middle,
  FingerCurl.HalfCurl,
  0.8,
  HandSide.Palm,
);
yeo.addDirection(
  Handedness.Left,
  Finger.Middle,
  FingerDirection[FingerAxis.YZ].ForwardMiddle,
  0.8,
  FingerAxis.YZ,
);

yeo.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1);

yeo.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.FullCurl, 1);

export default yeo;
