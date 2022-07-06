import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const qSign = new GestureDescription("Q");
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Vertical Down"
//     ],
//     [
//       "Index",
//       "Half Curl",
//       "Vertical Down"
//     ],
//     [
//       "Middle",
//       "Half Curl",
//       "Vertical Down"
//     ],
//     [
//       "Ring",
//       "Half Curl",
//       "Vertical Down"
//     ],
//     [
//       "Pinky",
//       "Half Curl",
//       "Diagonal Down Left"
//     ]
//   ]

//Thumb
qSign.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);
qSign.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.VerticalDown,
  1.0,
);
qSign.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.DiagonalDownRight,
  1.0,
);

//Index
qSign.addCurl(Handedness.Left, Finger.Index, FingerCurl.HalfCurl, 1);
qSign.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.VerticalDown,
  1.0,
);

//Middle
qSign.addCurl(Handedness.Left, Finger.Middle, FingerCurl.FullCurl, 1);

//Ring
qSign.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1);

//Pinky
qSign.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.FullCurl, 1);

export default qSign;
