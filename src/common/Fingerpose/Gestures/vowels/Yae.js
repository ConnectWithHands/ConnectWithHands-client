import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
  FingerPosition,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const yae = new GestureDescription("yae");

yae.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);

yae.addCurl(
  Handedness.Left,
  Finger.Index,
  FingerCurl.NoCurl,
  1.0,
  FingerPosition.Front,
);
yae.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.VerticalUp,
  1.0,
);

yae.addCurl(
  Handedness.Left,
  Finger.Middle,
  FingerCurl.NoCurl,
  1.0,
  FingerPosition.Front,
);
yae.addDirection(
  Handedness.Left,
  Finger.Middle,
  FingerDirection.VerticalUp,
  1.0,
);
yae.addDirection(
  Handedness.Left,
  Finger.Middle,
  FingerDirection.DiagonalUpRight,
  0.9,
);

yae.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1.0);

yae.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.NoCurl, 1.0);
yae.addDirection(
  Handedness.Left,
  Finger.Pinky,
  FingerDirection.VerticalUp,
  1.0,
);

export default yae;
