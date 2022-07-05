import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const bieup = new GestureDescription("bieup");

bieup.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.HalfCurl, 1.0);

bieup.addCurl(Handedness.Left, Finger.Index, FingerCurl.NoCurl, 1.0);

bieup.addCurl(Handedness.Left, Finger.Middle, FingerCurl.NoCurl, 1.0);

bieup.addCurl(Handedness.Left, Finger.Ring, FingerCurl.NoCurl, 1);

bieup.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.NoCurl, 1);

export default bieup;
