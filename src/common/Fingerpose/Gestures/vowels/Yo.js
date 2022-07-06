import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
  FingerPosition,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const yo = new GestureDescription("yo");

yo.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.HalfCurl, 1.0);
yo.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 0.8);
yo.addDirection(
  Handedness.Left,
  Finger.Thumb,
  FingerDirection.DiagonalUpRight,
  1.0,
);
yo.addDirection(
  Handedness.Left,
  Finger.Thumb,
  FingerDirection.HorizontalRight,
  0.8,
);

yo.addCurl(
  Handedness.Left,
  Finger.Index,
  FingerCurl.NoCurl,
  1.0,
  FingerPosition.Back,
);
yo.addDirection(Handedness.Left, Finger.Index, FingerDirection.VerticalUp, 1.0);
yo.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.DiagonalUpRight,
  0.8,
);

yo.addCurl(
  Handedness.Left,
  Finger.Middle,
  FingerCurl.NoCurl,
  1,
  FingerPosition.Back,
);
yo.addDirection(
  Handedness.Left,
  Finger.Middle,
  FingerDirection.VerticalUp,
  1.0,
);

yo.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1);
yo.addCurl(Handedness.Left, Finger.Ring, FingerCurl.HalfCurl, 1);

yo.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.FullCurl, 1);
yo.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.HalfCurl, 1);

export default yo;
