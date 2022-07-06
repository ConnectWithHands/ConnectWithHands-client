import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const tSign = new GestureDescription("T");
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Vertical Up"
//     ],
//     [
//       "Index",
//       "Full Curl",
//       "Diagonal Up Right"
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
//       "Diagonal Up Left"
//     ]
//   ]

//Thumb
tSign.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);
tSign.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.VerticalUp,
  1.0,
);

//Index
tSign.addCurl(Handedness.Left, Finger.Index, FingerCurl.FullCurl, 1);
tSign.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.VerticalUp,
  1.0,
);
tSign.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.DiagonalUpRight,
  0.8,
);

//Middle
tSign.addCurl(Handedness.Left, Finger.Middle, FingerCurl.FullCurl, 1);
tSign.addDirection(
  Handedness.Left,
  Finger.Middle,
  FingerDirection.HorizontalRight,
  0.8,
);

//Ring
tSign.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1);
tSign.addDirection(
  Handedness.Left,
  Finger.Ring,
  FingerDirection.HorizontalRight,
  0.8,
);

//Pinky
tSign.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.FullCurl, 1);
tSign.addDirection(
  Handedness.Left,
  Finger.Pinky,
  FingerDirection.HorizontalRight,
  0.8,
);

export default tSign;
