import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const kiuek = new GestureDescription("kiuek");

kiuek.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);
kiuek.addDirection(
  Handedness.Left,
  Finger.Thumb,
  FingerDirection.HorizontalRight,
  1.0,
);

kiuek.addCurl(Handedness.Left, Finger.Index, FingerCurl.FullCurl, 1.0);

kiuek.addCurl(Handedness.Left, Finger.Middle, FingerCurl.NoCurl, 1.0);
kiuek.addCurl(Handedness.Left, Finger.Middle, FingerCurl.HalfCurl, 0.8);
kiuek.addDirection(
  Handedness.Left,
  Finger.Middle,
  FingerDirection.VerticalDown,
  1.0,
);

kiuek.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1);

kiuek.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.FullCurl, 1);

export default kiuek;