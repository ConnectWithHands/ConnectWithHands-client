import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
  FingerPosition,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const ae = new GestureDescription("ae");

ae.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);

ae.addCurl(
  Handedness.Left,
  Finger.Index,
  FingerCurl.NoCurl,
  1.0,
  FingerPosition.Palm,
);
ae.addDirection(Handedness.Left, Finger.Index, FingerDirection.VerticalUp, 1.0);

ae.addCurl(
  Handedness.Left,
  Finger.Middle,
  FingerCurl.FullCurl,
  1.0,
  FingerPosition.Palm,
);
ae.addCurl(
  Handedness.Left,
  Finger.Middle,
  FingerCurl.HalfCurl,
  0.9,
  FingerPosition.Palm,
);

ae.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1.0);

ae.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.NoCurl, 1.0);
ae.addDirection(Handedness.Left, Finger.Pinky, FingerDirection.VerticalUp, 1.0);

export default ae;
