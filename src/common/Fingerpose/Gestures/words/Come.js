import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
  HandSide,
  FingerAxis,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const come = new GestureDescription("come");

come.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);

come.addCurl(
  Handedness.Left,
  Finger.Index,
  FingerCurl.HalfCurl,
  1.0,
  HandSide.Back,
);
come.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection[FingerAxis.XY].VerticalUp,
  0.8,
);

for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  come.addCurl(Handedness.Left, finger, FingerCurl.FullCurl, 1.0);
  come.addDirection(
    Handedness.Left,
    finger,
    FingerDirection[FingerAxis.XY].DiagonalUpRight,
    0.8,
  );
}

export default come;
