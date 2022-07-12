import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
  HandSide,
  FingerAxis,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const love = new GestureDescription("love");

love.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);
love.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection[FingerAxis.XY].HorizontalRight,
  0.8,
);

love.addCurl(
  Handedness.Left,
  Finger.Index,
  FingerCurl.NoCurl,
  1.0,
  HandSide.Palm,
);
love.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection[FingerAxis.XY].VerticalUp,
  0.8,
);

for (let finger of [Finger.Middle, Finger.Ring]) {
  love.addCurl(Handedness.Left, finger, FingerCurl.FullCurl, 1.0);
}

love.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.NoCurl, 1.0);
love.addDirection(
  Handedness.Left,
  Finger.Pinky,
  FingerDirection[FingerAxis.XY].VerticalUp,
  0.8,
);

export default love;
