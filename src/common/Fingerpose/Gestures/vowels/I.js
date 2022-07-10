import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
  HandSide,
  FingerAxis,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const i = new GestureDescription("i");

i.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);
i.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.HalfCurl, 0.8);

i.addCurl(Handedness.Left, Finger.Index, FingerCurl.FullCurl, 1.0);
i.addCurl(Handedness.Left, Finger.Index, FingerCurl.HalfCurl, 0.8);

i.addCurl(Handedness.Left, Finger.Middle, FingerCurl.FullCurl, 1.0);

i.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1.0);

i.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.NoCurl, 1.0, HandSide.Palm);
i.addDirection(
  Handedness.Left,
  Finger.Pinky,
  FingerDirection[FingerAxis.XY].VerticalUp,
  0.8,
);
i.addDirection(
  Handedness.Left,
  Finger.Pinky,
  FingerDirection[FingerAxis.XY].DiagonalUpLeft,
  0.9,
);

export default i;
