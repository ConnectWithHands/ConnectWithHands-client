import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const iSign = new GestureDescription("I");
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Diagonal Up Left"
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
//       "Vertical Up"
//     ]
//   ]

//Thumb
iSign.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.HalfCurl, 1.0);
iSign.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.DiagonalUpLeft,
  0.8,
);

//Index
iSign.addCurl(Handedness.Left, Finger.Index, FingerCurl.FullCurl, 1);
iSign.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.VerticalUp,
  0.8,
);

//Middle
iSign.addCurl(Handedness.Left, Finger.Middle, FingerCurl.FullCurl, 1);
iSign.addDirection(
  Handedness.Left,
  Finger.Middle,
  FingerDirection.VerticalUp,
  0.8,
);

//Ring
iSign.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1);
iSign.addDirection(
  Handedness.Left,
  Finger.Ring,
  FingerDirection.VerticalUp,
  0.8,
);

//Pinky
iSign.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.NoCurl, 1);
iSign.addDirection(
  Handedness.Left,
  Finger.Pinky,
  FingerDirection.VerticalUp,
  0.8,
);

export default iSign;
