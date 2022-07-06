import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const cSign = new GestureDescription("C");
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
cSign.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);
cSign.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.DiagonalUpRight,
  0.8,
);
cSign.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.HorizontalRight,
  0.8,
);

//Index
cSign.addCurl(Handedness.Left, Finger.Index, FingerCurl.NoCurl, 1);
cSign.addCurl(Handedness.Left, Finger.Index, FingerCurl.HalfCurl, 0.9);
cSign.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.DiagonalUpRight,
  0.8,
);

//Middle
cSign.addCurl(Handedness.Left, Finger.Middle, FingerCurl.HalfCurl, 1);
cSign.addDirection(
  Handedness.Left,
  Finger.Middle,
  FingerDirection.DiagonalUpRight,
  0.8,
);

//Ring
cSign.addCurl(Handedness.Left, Finger.Ring, FingerCurl.HalfCurl, 1);
cSign.addDirection(
  Handedness.Left,
  Finger.Ring,
  FingerDirection.DiagonalUpRight,
  0.8,
);

//Pinky
cSign.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.HalfCurl, 1);
cSign.addDirection(
  Handedness.Left,
  Finger.Pinky,
  FingerDirection.DiagonalUpRight,
  0.8,
);

export default cSign;
