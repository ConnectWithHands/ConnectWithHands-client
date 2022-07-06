import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const xSign = new GestureDescription("X");
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Vertical Up"
//     ],
//     [
//       "Index",
//       "Half Curl",
//       "Vertical Up"
//     ],
//     [
//       "Middle",
//       "Half Curl",
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
xSign.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.HalfCurl, 1.0);
xSign.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.VerticalUp,
  0.8,
);

//Index
xSign.addCurl(Handedness.Left, Finger.Index, FingerCurl.NoCurl, 1);
xSign.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.VerticalUp,
  1.0,
);

//Middle
xSign.addCurl(Handedness.Left, Finger.Middle, FingerCurl.FullCurl, 1);

//Ring
xSign.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1);

//Pinky
xSign.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.FullCurl, 1);

export default xSign;
