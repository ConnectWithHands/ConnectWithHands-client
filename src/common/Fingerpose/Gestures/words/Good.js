import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
  HandSide,
  FingerAxis,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const good = new GestureDescription("good");

good.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);
good.addDirection(
  Handedness.Left,
  Finger.Thumb,
  FingerDirection[FingerAxis.XY].DiagonalUpLeft,
  0.8,
);

for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  good.addCurl(Handedness.Left, finger, FingerCurl.HalfCurl, 1.0);
  good.addCurl(Handedness.Left, finger, FingerCurl.FullCurl, 0.8);
  good.addDirection(
    Handedness.Left,
    finger,
    FingerDirection[FingerAxis.XY].DiagonalUpRight,
    0.8,
  );
}

export default good;
