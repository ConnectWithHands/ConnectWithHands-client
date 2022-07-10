import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
  FingerPosition,
  FingerAxis,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const riuel = new GestureDescription("riuel");

riuel.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);
riuel.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.HalfCurl, 0.8);

riuel.addCurl(Handedness.Left, Finger.Index, FingerCurl.NoCurl, 1.0);
riuel.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection[FingerAxis.XY].HorizontalRight,
  0.8,
);

riuel.addCurl(Handedness.Left, Finger.Middle, FingerCurl.NoCurl, 1.0);
riuel.addDirection(
  Handedness.Left,
  Finger.Middle,
  FingerDirection[FingerAxis.XY].HorizontalRight,
  0.8,
);

riuel.addCurl(Handedness.Left, Finger.Ring, FingerCurl.NoCurl, 1.0);
riuel.addCurl(Handedness.Left, Finger.Ring, FingerCurl.HalfCurl, 0.8);
riuel.addDirection(
  Handedness.Left,
  Finger.Middle,
  FingerDirection[FingerAxis.XY].HorizontalRight,
  0.8,
);

riuel.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.FullCurl, 1);
riuel.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.HalfCurl, 0.8);

export default riuel;
