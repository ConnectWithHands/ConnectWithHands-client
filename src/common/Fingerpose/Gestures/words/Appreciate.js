import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
  HandSide,
  FingerAxis,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const appreciate = new GestureDescription("appreciate");

// thumb:
appreciate.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);
appreciate.addCurl(Handedness.Right, Finger.Thumb, FingerCurl.NoCurl, 1.0);

for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  appreciate.addCurl(Handedness.Left, finger, FingerCurl.NoCurl, 1.0);
  appreciate.addCurl(Handedness.Left, finger, FingerCurl.HalfCurl, 0.8);
  appreciate.addDirection(
    Handedness.Left,
    finger,
    FingerDirection[FingerAxis.XY].HorizontalRight,
    0.8,
  );

  appreciate.addCurl(Handedness.Right, finger, FingerCurl.NoCurl, 1.0);
  appreciate.addCurl(Handedness.Right, finger, FingerCurl.HalfCurl, 0.8);

  appreciate.addDirection(
    Handedness.Right,
    finger,
    FingerDirection[FingerAxis.XY].HorizontalLeft,
    0.8,
  );
}

export default appreciate;
