import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const vSign = new GestureDescription("V");
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Diagonal Up Left"
//     ],
//     [
//       "Index",
//       "No Curl",
//       "Diagonal Up Right"
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
//       "Diagonal Up Left"
//     ]
//   ]

//Thumb
vSign.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.HalfCurl, 1.0);
vSign.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.DiagonalUpLeft,
  0.7,
);

//Index
vSign.addCurl(Handedness.Left, Finger.Index, FingerCurl.NoCurl, 1);
vSign.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.DiagonalUpRight,
  0.7,
);

//Middle
vSign.addCurl(Handedness.Left, Finger.Middle, FingerCurl.NoCurl, 1);
vSign.addDirection(
  Handedness.Left,
  Finger.Middle,
  FingerDirection.VerticalUp,
  0.7,
);

//Ring
vSign.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1);
vSign.addDirection(
  Handedness.Left,
  Finger.Ring,
  FingerDirection.VerticalUp,
  0.7,
);

//Pinky
vSign.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.FullCurl, 1);
vSign.addDirection(
  Handedness.Left,
  Finger.Pinky,
  FingerDirection.DiagonalUpLeft,
  0.7,
);

export default vSign;
