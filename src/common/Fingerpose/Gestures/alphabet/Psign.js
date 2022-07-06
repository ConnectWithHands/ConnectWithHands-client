import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const pSign = new GestureDescription("P");
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Horizontal Right"
//     ],
//     [
//       "Index",
//       "No Curl",
//       "Horizontal Right"
//     ],
//     [
//       "Middle",
//       "Full Curl",
//       "Horizontal Right"
//     ],
//     [
//       "Ring",
//       "Full Curl",
//       "Horizontal Right"
//     ],
//     [
//       "Pinky",
//       "Full Curl",
//       "Diagonal Down Right"
//     ]
//   ]

//Thumb
pSign.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);
pSign.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.HorizontalRight,
  1.0,
);

//Index
pSign.addCurl(Handedness.Left, Finger.Index, FingerCurl.NoCurl, 1);
pSign.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.HorizontalRight,
  1.0,
);

//Middle
pSign.addCurl(Handedness.Left, Finger.Middle, FingerCurl.HalfCurl, 1);
pSign.addDirection(
  Handedness.Left,
  Finger.Middle,
  FingerDirection.DiagonalDownRight,
  1.0,
);

//Ring
pSign.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1);
pSign.addDirection(
  Handedness.Left,
  Finger.Ring,
  FingerDirection.DiagonalDownRight,
  1.0,
);

//Pinky
pSign.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.FullCurl, 1);
pSign.addDirection(
  Handedness.Left,
  Finger.Pinky,
  FingerDirection.DiagonalDownRight,
  1.0,
);

export default pSign;
