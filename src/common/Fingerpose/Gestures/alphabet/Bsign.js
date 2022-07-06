import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const bSign = new GestureDescription("B");

//Thumb
bSign.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.HalfCurl, 1.0);

//Index
bSign.addCurl(Handedness.Left, Finger.Index, FingerCurl.NoCurl, 1);
bSign.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.VerticalUp,
  1.0,
);

//Middle
bSign.addCurl(Handedness.Left, Finger.Middle, FingerCurl.NoCurl, 1);
bSign.addDirection(
  Handedness.Left,
  Finger.Middle,
  FingerDirection.VerticalUp,
  1.0,
);

//Ring
bSign.addCurl(Handedness.Left, Finger.Ring, FingerCurl.NoCurl, 1);
bSign.addDirection(
  Handedness.Left,
  Finger.Ring,
  FingerDirection.VerticalUp,
  1.0,
);

//Pinky
bSign.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.NoCurl, 1);
bSign.addDirection(
  Handedness.Left,
  Finger.Pinky,
  FingerDirection.VerticalUp,
  1.0,
);

export default bSign;
