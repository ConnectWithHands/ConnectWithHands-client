import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const lSign = new GestureDescription("L");
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Index",
//       "No Curl",
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
//       "Full Curl",
//       "Vertical Up"
//     ]
//   ]

//Thumb
lSign.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);
lSign.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.DiagonalUpRight,
  1.0,
);

//Index
lSign.addCurl(Handedness.Left, Finger.Index, FingerCurl.NoCurl, 1);
lSign.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.VerticalUp,
  1.0,
);

//Middle
lSign.addCurl(Handedness.Left, Finger.Middle, FingerCurl.FullCurl, 1);
lSign.addDirection(
  Handedness.Left,
  Finger.Middle,
  FingerDirection.VerticalUp,
  0.8,
);

//Ring
lSign.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1);
lSign.addDirection(
  Handedness.Left,
  Finger.Ring,
  FingerDirection.VerticalUp,
  0.8,
);

//Pinky
lSign.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.FullCurl, 1);
lSign.addDirection(
  Handedness.Left,
  Finger.Pinky,
  FingerDirection.VerticalUp,
  0.8,
);

export default lSign;
