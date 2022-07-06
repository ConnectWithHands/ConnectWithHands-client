import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const hSign = new GestureDescription("H");
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
//       "No Curl",
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
//       "Horizontal Right"
//     ]
//   ]

//Thumb
hSign.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 1.0);
hSign.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.HorizontalRight,
  1.0,
);

//Index
hSign.addCurl(Handedness.Left, Finger.Index, FingerCurl.NoCurl, 1);
hSign.addCurl(Handedness.Left, Finger.Index, FingerCurl.HalfCurl, 0.8);
hSign.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.HorizontalRight,
  0.8,
);

//Middle
hSign.addCurl(Handedness.Left, Finger.Middle, FingerCurl.NoCurl, 1);
hSign.addCurl(Handedness.Left, Finger.Middle, FingerCurl.HalfCurl, 0.8);
hSign.addDirection(
  Handedness.Left,
  Finger.Middle,
  FingerDirection.HorizontalRight,
  0.8,
);

//Ring
hSign.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1);
hSign.addDirection(
  Handedness.Left,
  Finger.Ring,
  FingerDirection.HorizontalRight,
  1.0,
);

//Pinky
hSign.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.FullCurl, 1);
hSign.addDirection(
  Handedness.Left,
  Finger.Pinky,
  FingerDirection.HorizontalRight,
  1.0,
);

export default hSign;
