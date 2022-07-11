import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
  HandSide,
  FingerAxis,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const kieuk = new GestureDescription("kieuk");

kieuk.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);
kieuk.addDirection(
  Handedness.Left,
  Finger.Thumb,
  FingerDirection[FingerAxis.XY].HorizontalRight,
  0.8,
);

kieuk.addCurl(Handedness.Left, Finger.Index, FingerCurl.FullCurl, 1.0);

kieuk.addCurl(Handedness.Left, Finger.Middle, FingerCurl.NoCurl, 1.0);
kieuk.addCurl(Handedness.Left, Finger.Middle, FingerCurl.HalfCurl, 0.8);
kieuk.addDirection(
  Handedness.Left,
  Finger.Middle,
  FingerDirection[FingerAxis.XY].VerticalDown,
  0.8,
);

kieuk.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1);

kieuk.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.FullCurl, 1);

export default kieuk;
