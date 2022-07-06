import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const fSign = new GestureDescription("F");
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Index",
//       "Full Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Middle",
//       "No Curl",
//       "Vertical Up"
//     ],
//     [
//       "Ring",
//       "No Curl",
//       "Vertical Up"
//     ],
//     [
//       "Pinky",
//       "No Curl",
//       "Vertical Up"
//     ]
//   ]

//Thumb
fSign.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.HalfCurl, 1.0);
fSign.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.DiagonalUpRight,
  0.8,
);

//Index
fSign.addCurl(Handedness.Left, Finger.Index, FingerCurl.HalfCurl, 1);
fSign.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.VerticalUp,
  1.0,
);
fSign.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.DiagonalUpRight,
  0.8,
);

//Middle
fSign.addCurl(Handedness.Left, Finger.Middle, FingerCurl.NoCurl, 1);
fSign.addDirection(
  Handedness.Left,
  Finger.Middle,
  FingerDirection.VerticalUp,
  1.0,
);

//Ring
fSign.addCurl(Handedness.Left, Finger.Ring, FingerCurl.NoCurl, 1);
fSign.addDirection(
  Handedness.Left,
  Finger.Ring,
  FingerDirection.VerticalUp,
  1.0,
);

//Pinky
fSign.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.NoCurl, 1);
fSign.addDirection(
  Handedness.Left,
  Finger.Pinky,
  FingerDirection.VerticalUp,
  1.0,
);

export default fSign;
