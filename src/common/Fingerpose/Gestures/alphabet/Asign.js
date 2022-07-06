import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const aSign = new GestureDescription("A");

//Thumb
aSign.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);
aSign.addDirection(
  Handedness.Left,
  Finger.Thumb,
  FingerDirection.VerticalUp,
  1.0,
);

// aSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Index
aSign.addCurl(Handedness.Left, Finger.Index, FingerCurl.FullCurl, 1);
aSign.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.VerticalUp,
  0.8,
);
aSign.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.DiagonalUpRight,
  0.8,
);
// aSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Middle
aSign.addCurl(Handedness.Left, Finger.Middle, FingerCurl.FullCurl, 1);
aSign.addDirection(
  Handedness.Left,
  Finger.Middle,
  FingerDirection.VerticalUp,
  1.0,
);
// aSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.70);

//Ring
aSign.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1);
aSign.addDirection(
  Handedness.Left,
  Finger.Ring,
  FingerDirection.VerticalUp,
  1.0,
);

//Pinky
aSign.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.FullCurl, 1);

export default aSign;
