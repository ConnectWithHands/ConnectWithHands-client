import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const dSign = new GestureDescription("D");
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Vertical Up"
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
dSign.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.HalfCurl, 1.0);
dSign.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.VerticalUp,
  0.7,
);

//Index
dSign.addCurl(Handedness.Left, Finger.Index, FingerCurl.NoCurl, 1);
dSign.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.VerticalUp,
  0.7,
);

//Middle
dSign.addCurl(Handedness.Left, Finger.Middle, FingerCurl.FullCurl, 1);
dSign.addDirection(
  Handedness.Left,
  Finger.Middle,
  FingerDirection.VerticalUp,
  0.7,
);

//Ring
dSign.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1);
dSign.addDirection(
  Handedness.Left,
  Finger.Ring,
  FingerDirection.VerticalUp,
  0.7,
);

//Pinky
dSign.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.FullCurl, 1);
dSign.addDirection(
  Handedness.Left,
  Finger.Pinky,
  FingerDirection.VerticalUp,
  0.7,
);

export default dSign;
