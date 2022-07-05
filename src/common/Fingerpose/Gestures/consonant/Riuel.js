import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const riuel = new GestureDescription("riuel");

riuel.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);

riuel.addCurl(Handedness.Left, Finger.Index, FingerCurl.NoCurl, 1.0);
riuel.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.HorizontalRight,
  1.0,
);

riuel.addCurl(Handedness.Left, Finger.Middle, FingerCurl.NoCurl, 1.0);
riuel.addDirection(
  Handedness.Left,
  Finger.Middle,
  FingerDirection.HorizontalRight,
  1.0,
);

riuel.addCurl(Handedness.Left, Finger.Ring, FingerCurl.NoCurl, 1);
riuel.addCurl(Handedness.Left, Finger.Ring, FingerCurl.HalfCurl, 1);
riuel.addDirection(
  Handedness.Left,
  Finger.Middle,
  FingerDirection.HorizontalRight,
  1.0,
);

riuel.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.FullCurl, 1);
riuel.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.HalfCurl, 0.8);

export default riuel;
