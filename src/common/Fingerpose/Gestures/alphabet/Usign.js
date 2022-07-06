import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const uSign = new GestureDescription("U");
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Diagonal Up Left"
//     ],
//     [
//       "Index",
//       "No Curl",
//       "Vertical Up"
//     ],
//     [
//       "Middle",
//       "No Curl",
//       "Vertical Up"
//     ],
//     [
//       "Ring",
//       "Full Curl",
//       "Vertical Up"
//     ],
//     [
//       "Pinky",
//       "Full Curl",
//       "Vertical Up"
//     ]
//   ]

//Thumb
uSign.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.HalfCurl, 1.0);
uSign.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.DiagonalUpLeft,
  0.8,
);

//Index
uSign.addCurl(Handedness.Left, Finger.Index, FingerCurl.NoCurl, 1);
uSign.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.VerticalUp,
  0.8,
);

//Middle
uSign.addCurl(Handedness.Left, Finger.Middle, FingerCurl.NoCurl, 1);
uSign.addDirection(
  Handedness.Left,
  Finger.Middle,
  FingerDirection.VerticalUp,
  0.8,
);

//Ring
uSign.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1);
uSign.addDirection(
  Handedness.Left,
  Finger.Ring,
  FingerDirection.VerticalUp,
  0.8,
);

//Pinky
uSign.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.FullCurl, 1);
uSign.addDirection(
  Handedness.Left,
  Finger.Pinky,
  FingerDirection.DiagonalUpRight,
  0.8,
);

export default uSign;
