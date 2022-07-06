import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const u = new GestureDescription("u");

u.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);

u.addCurl(Handedness.Left, Finger.Index, FingerCurl.NoCurl, 1.0);
u.addCurl(Handedness.Left, Finger.Index, FingerCurl.HalfCurl, 1.0);
u.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.VerticalDown,
  1.0,
);

u.addCurl(Handedness.Left, Finger.Middle, FingerCurl.FullCurl, 1);

u.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1);

u.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.FullCurl, 1);

export default u;
