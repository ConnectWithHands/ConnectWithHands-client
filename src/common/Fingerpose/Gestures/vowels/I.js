import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
  FingerPosition,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const i = new GestureDescription("i");

i.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);
i.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.HalfCurl, 0.8);

i.addCurl(Handedness.Left, Finger.Index, FingerCurl.FullCurl, 1.0);
i.addCurl(Handedness.Left, Finger.Index, FingerCurl.HalfCurl, 0.8);

i.addCurl(Handedness.Left, Finger.Middle, FingerCurl.FullCurl, 1.0);

i.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1.0);

i.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.NoCurl, 1.0);
i.addDirection(
  Handedness.Left,
  Finger.Pinky,
  FingerDirection.VerticalUp,
  1.0,
  FingerPosition.Palm,
);
i.addDirection(
  Handedness.Left,
  Finger.Pinky,
  FingerDirection.DiagonalUpLeft,
  0.9,
);

export default i;
