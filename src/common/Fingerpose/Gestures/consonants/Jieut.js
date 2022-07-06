import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const jieut = new GestureDescription("jieut");

jieut.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);
jieut.addDirection(
  Handedness.Left,
  Finger.Thumb,
  FingerDirection.HorizontalRight,
  1.0,
);

jieut.addCurl(Handedness.Left, Finger.Index, FingerCurl.NoCurl, 1.0);
jieut.addCurl(Handedness.Left, Finger.Index, FingerCurl.HalfCurl, 0.8);
jieut.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.VerticalDown,
  1.0,
);
jieut.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.DiagonalDownRight,
  0.8,
);

jieut.addCurl(Handedness.Left, Finger.Middle, FingerCurl.NoCurl, 1.0);
jieut.addCurl(Handedness.Left, Finger.Middle, FingerCurl.HalfCurl, 0.8);
jieut.addDirection(
  Handedness.Left,
  Finger.Middle,
  FingerDirection.VerticalDown,
  1.0,
);
jieut.addDirection(
  Handedness.Left,
  Finger.Middle,
  FingerDirection.DiagonalDownLeft,
  1.0,
);

jieut.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1);

jieut.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.FullCurl, 1);

export default jieut;
