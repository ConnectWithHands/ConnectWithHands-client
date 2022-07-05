import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const niuen = new GestureDescription("niuen");

niuen.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);
niuen.addDirection(
  Handedness.Left,
  Finger.Thumb,
  FingerDirection.VerticalUp,
  1.0,
);
niuen.addDirection(
  Handedness.Left,
  Finger.Thumb,
  FingerDirection.DiagonalUpRight,
  0.8,
);

niuen.addCurl(Handedness.Left, Finger.Index, FingerCurl.NoCurl, 1.0);
niuen.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.HorizontalRight,
  0.8,
);

niuen.addCurl(Handedness.Left, Finger.Middle, FingerCurl.FullCurl, 1);
niuen.addCurl(Handedness.Left, Finger.Middle, FingerCurl.HalfCurl, 0.8);

niuen.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1);
niuen.addCurl(Handedness.Left, Finger.Ring, FingerCurl.HalfCurl, 0.8);

niuen.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.FullCurl, 1);
niuen.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.HalfCurl, 0.8);

export default niuen;
