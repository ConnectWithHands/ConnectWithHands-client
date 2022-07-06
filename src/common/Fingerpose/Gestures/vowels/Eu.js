import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const eu = new GestureDescription("eu");

eu.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.HalfCurl, 1.0);
eu.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 0.9);
eu.addDirection(
  Handedness.Left,
  Finger.Thumb,
  FingerDirection.HorizontalRight,
  1.0,
);

eu.addCurl(Handedness.Left, Finger.Index, FingerCurl.NoCurl, 1.0);
eu.addCurl(Handedness.Left, Finger.Index, FingerCurl.HalfCurl, 0.9);
eu.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.HorizontalRight,
  1.0,
);

eu.addCurl(Handedness.Left, Finger.Middle, FingerCurl.HalfCurl, 1);
eu.addCurl(Handedness.Left, Finger.Middle, FingerCurl.FullCurl, 0.8);

eu.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1);

eu.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.FullCurl, 1);

export default eu;
