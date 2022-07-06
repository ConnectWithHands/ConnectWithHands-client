import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const gSign = new GestureDescription("G");
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Index",
//       "Half Curl",
//       "Horizontal Right"
//     ],
//     [
//       "Middle",
//       "Full Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Ring",
//       "Full Curl",
//       "Horizontal Right"
//     ],
//     [
//       "Pinky",
//       "Full Curl",
//       "Horizontal Right"
//     ]
//   ]

//Thumb
gSign.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);
gSign.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.DiagonalUpRight,
  1.0,
);

//Index
gSign.addCurl(Handedness.Left, Finger.Index, FingerCurl.NoCurl, 1);
gSign.addCurl(Handedness.Left, Finger.Index, FingerCurl.HalfCurl, 0.8);
gSign.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.HorizontalRight,
  1.0,
);

//Middle
gSign.addCurl(Handedness.Left, Finger.Middle, FingerCurl.FullCurl, 1);

//Ring
gSign.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1);

//Pinky
gSign.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.FullCurl, 1);

export default gSign;
