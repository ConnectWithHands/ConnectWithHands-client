import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
  HandSide,
  FingerAxis,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const ssangbieup = new GestureDescription("ssangbieup");

ssangbieup.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.HalfCurl, 1.0);

ssangbieup.addCurl(Handedness.Left, Finger.Index, FingerCurl.NoCurl, 1.0);
ssangbieup.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection[FingerAxis.XY].VerticalUp,
  0.8,
);

ssangbieup.addCurl(Handedness.Left, Finger.Middle, FingerCurl.NoCurl, 1.0);
ssangbieup.addDirection(
  Handedness.Left,
  Finger.Middle,
  FingerDirection[FingerAxis.XY].VerticalUp,
  0.8,
);

ssangbieup.addCurl(Handedness.Left, Finger.Ring, FingerCurl.NoCurl, 1);
ssangbieup.addDirection(
  Handedness.Left,
  Finger.Ring,
  FingerDirection[FingerAxis.XY].VerticalUp,
  0.8,
);

ssangbieup.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.NoCurl, 1);
ssangbieup.addDirection(
  Handedness.Left,
  Finger.Pinky,
  FingerDirection[FingerAxis.XY].VerticalUp,
  0.8,
);

export default ssangbieup;
