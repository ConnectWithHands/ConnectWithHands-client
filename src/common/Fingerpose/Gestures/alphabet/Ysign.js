import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const ySign = new GestureDescription("Y");
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Index",
//       "Full Curl",
//       "Vertical Up"
//     ],
//     [
//       "Middle",
//       "Full Curl",
//       "Vertical Up"
//     ],
//     [
//       "Ring",
//       "Full Curl",
//       "Vertical Up"
//     ],
//     [
//       "Pinky",
//       "No Curl",
//       "Diagonal Up Left"
//     ]
//   ]

//Thumb
ySign.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);
ySign.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.DiagonalUpRight,
  0.7,
);

//Index
ySign.addCurl(Handedness.Left, Finger.Index, FingerCurl.FullCurl, 1);
ySign.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.VerticalUp,
  0.7,
);

//Middle
ySign.addCurl(Handedness.Left, Finger.Middle, FingerCurl.FullCurl, 1);
ySign.addDirection(
  Handedness.Left,
  Finger.Middle,
  FingerDirection.VerticalUp,
  0.7,
);

//Ring
ySign.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1);
ySign.addDirection(
  Handedness.Left,
  Finger.Ring,
  FingerDirection.VerticalUp,
  0.7,
);

//Pinky
ySign.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.NoCurl, 1);
ySign.addDirection(
  Handedness.Left,
  Finger.Pinky,
  FingerDirection.DiagonalUpLeft,
  0.7,
);

export default ySign;
