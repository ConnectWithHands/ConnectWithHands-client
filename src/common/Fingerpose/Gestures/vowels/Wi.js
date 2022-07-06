import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const wi = new GestureDescription("wi");

wi.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);

wi.addCurl(Handedness.Left, Finger.Index, FingerCurl.NoCurl, 1.0);
wi.addCurl(Handedness.Left, Finger.Index, FingerCurl.HalfCurl, 1.0);
wi.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.VerticalDown,
  1.0,
);

wi.addCurl(Handedness.Left, Finger.Middle, FingerCurl.FullCurl, 1);

wi.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1);

wi.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.NoCurl, 1);
wi.addDirection(
  Handedness.Left,
  Finger.Pinky,
  FingerDirection.VerticalDown,
  1.0,
);

export default wi;
