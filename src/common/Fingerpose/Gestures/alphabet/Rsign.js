import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const rSign = new GestureDescription("R");
// [
//     [
//       "Thumb",
//       "Half Curl",
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
rSign.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.HalfCurl, 1.0);
rSign.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.DiagonalUpLeft,
  0.8,
);

//Index
rSign.addCurl(Handedness.Left, Finger.Index, FingerCurl.NoCurl, 1);
rSign.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.VerticalUp,
  0.8,
);

//Middle
rSign.addCurl(Handedness.Left, Finger.Middle, FingerCurl.NoCurl, 1);
rSign.addDirection(
  Handedness.Left,
  Finger.Middle,
  FingerDirection.VerticalUp,
  0.8,
);

//Ring
rSign.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1);
rSign.addDirection(
  Handedness.Left,
  Finger.Ring,
  FingerDirection.VerticalUp,
  0.8,
);

//Pinky
rSign.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.FullCurl, 1);
rSign.addDirection(
  Handedness.Left,
  Finger.Pinky,
  FingerDirection.VerticalUp,
  0.8,
);

export default rSign;
