import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const yu = new GestureDescription("yu");

yu.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);

yu.addCurl(Handedness.Left, Finger.Index, FingerCurl.NoCurl, 1.0);
yu.addCurl(Handedness.Left, Finger.Index, FingerCurl.HalfCurl, 1.0);
yu.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.VerticalDown,
  1.0,
);

yu.addCurl(Handedness.Left, Finger.Middle, FingerCurl.NoCurl, 1);
yu.addDirection(
  Handedness.Left,
  Finger.Middle,
  FingerDirection.VerticalDown,
  1.0,
);

yu.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1);

yu.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.FullCurl, 1);

export default yu;
