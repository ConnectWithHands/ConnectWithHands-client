import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const sSign = new GestureDescription("S");
// [
//     [
//       "Thumb",
//       "Half Curl",
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
sSign.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);
sSign.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.VerticalUp,
  1.0,
);
sSign.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.DiagonalUpRight,
  0.8,
);

//Index
sSign.addCurl(Handedness.Left, Finger.Index, FingerCurl.FullCurl, 1);
sSign.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.DiagonalUpRight,
  1.0,
);

//Middle
sSign.addCurl(Handedness.Left, Finger.Middle, FingerCurl.FullCurl, 1);
sSign.addDirection(
  Handedness.Left,
  Finger.Middle,
  FingerDirection.VerticalUp,
  1.0,
);
sSign.addDirection(
  Handedness.Left,
  Finger.Middle,
  FingerDirection.DiagonalUpRight,
  0.8,
);

//Ring
sSign.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1);
sSign.addDirection(
  Handedness.Left,
  Finger.Ring,
  FingerDirection.VerticalUp,
  1.0,
);
sSign.addDirection(
  Handedness.Left,
  Finger.Ring,
  FingerDirection.DiagonalUpLeft,
  0.8,
);

//Pinky
sSign.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.FullCurl, 1);
sSign.addDirection(
  Handedness.Left,
  Finger.Pinky,
  FingerDirection.DiagonalUpLeft,
  1.0,
);

export default sSign;
