import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const kSign = new GestureDescription("K");
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Diagonal Up Left"
//     ],
//     [
//       "Index",
//       "No Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Middle",
//       "No Curl",
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
kSign.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);
kSign.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.VerticalUp,
  1.0,
);
kSign.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.DiagonalUpLeft,
  0.8,
);

//Index
kSign.addCurl(Handedness.Left, Finger.Index, FingerCurl.NoCurl, 1);
kSign.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.VerticalUp,
  1.0,
);
kSign.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.DiagonalUpRight,
  0.8,
);

//Middle
kSign.addCurl(Handedness.Left, Finger.Middle, FingerCurl.NoCurl, 1);
kSign.addDirection(
  Handedness.Left,
  Finger.Middle,
  FingerDirection.VerticalUp,
  1.0,
);

//Ring
kSign.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1);
kSign.addDirection(
  Handedness.Left,
  Finger.Ring,
  FingerDirection.VerticalUp,
  1.0,
);

//Pinky
kSign.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.FullCurl, 1);
kSign.addDirection(
  Handedness.Left,
  Finger.Pinky,
  FingerDirection.VerticalUp,
  0.8,
);

export default kSign;
