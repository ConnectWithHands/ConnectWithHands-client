import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
  FingerPosition,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const yeo = new GestureDescription("yeo");

yeo.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.HalfCurl, 1.0);
yeo.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 0.8);

yeo.addCurl(Handedness.Left, Finger.Index, FingerCurl.NoCurl, 1.0);
yeo.addCurl(Handedness.Left, Finger.Index, FingerCurl.HalfCurl, 0.8);
yeo.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.HorizontalRight,
  1.0,
);

yeo.addCurl(Handedness.Left, Finger.Middle, FingerCurl.HalfCurl, 1);
yeo.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.HorizontalRight,
  1.0,
);

yeo.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1);

yeo.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.FullCurl, 1);

export default yeo;
