import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const oSign = new GestureDescription("O");
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Index",
//       "Half Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Middle",
//       "Half Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Ring",
//       "Half Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Pinky",
//       "Half Curl",
//       "Diagonal Up Right"
//     ]
//   ]

//Thumb
oSign.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);
oSign.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.DiagonalUpRight,
  0.8,
);

//Index
oSign.addCurl(Handedness.Left, Finger.Index, FingerCurl.HalfCurl, 1);
oSign.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.DiagonalUpRight,
  0.8,
);

//Middle
oSign.addCurl(Handedness.Left, Finger.Middle, FingerCurl.HalfCurl, 1);
oSign.addDirection(
  Handedness.Left,
  Finger.Middle,
  FingerDirection.DiagonalUpRight,
  0.8,
);

//Ring
oSign.addCurl(Handedness.Left, Finger.Ring, FingerCurl.HalfCurl, 1);
oSign.addDirection(
  Handedness.Left,
  Finger.Ring,
  FingerDirection.DiagonalUpRight,
  0.8,
);

//Pinky
oSign.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.HalfCurl, 1);
oSign.addDirection(
  Handedness.Left,
  Finger.Pinky,
  FingerDirection.DiagonalUpRight,
  0.8,
);

export default oSign;
