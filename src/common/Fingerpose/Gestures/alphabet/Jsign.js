import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const jSign = new GestureDescription("J");
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Index",
//       "Full Curl",
//       "Diagonal Up Right"
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
//       "No Curl",
//       "Horizontal Right"
//     ]
//   ]

//Thumb
jSign.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);
jSign.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.DiagonalUpRight,
  0.8,
);

//Index
jSign.addCurl(Handedness.Left, Finger.Index, FingerCurl.FullCurl, 1);
jSign.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.DiagonalUpRight,
  0.8,
);

//Middle
jSign.addCurl(Handedness.Left, Finger.Middle, FingerCurl.FullCurl, 1);
jSign.addDirection(
  Handedness.Left,
  Finger.Middle,
  FingerDirection.DiagonalUpRight,
  0.8,
);

//Ring
jSign.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1);
jSign.addDirection(
  Handedness.Left,
  Finger.Ring,
  FingerDirection.HorizontalRight,
  0.8,
);

//Pinky
jSign.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.NoCurl, 1);
jSign.addDirection(
  Handedness.Left,
  Finger.Pinky,
  FingerDirection.HorizontalRight,
  0.8,
);

export default jSign;
