import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const eSign = new GestureDescription("E");
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Vertical Up"
//     ],
//     [
//       "Index",
//       "Half Curl",
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
//       "Vertical Up"
//     ]
//   ]

//Thumb
eSign.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.HalfCurl, 1.0);
eSign.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.DiagonalUpRight,
  0.8,
);

//Index
eSign.addCurl(Handedness.Left, Finger.Index, FingerCurl.HalfCurl, 1.0);
eSign.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.VerticalUp,
  0.8,
);
eSign.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.DiagonalUpRight,
  0.8,
);

//Middle
eSign.addCurl(Handedness.Left, Finger.Middle, FingerCurl.HalfCurl, 1);
eSign.addDirection(
  Handedness.Left,
  Finger.Middle,
  FingerDirection.VerticalUp,
  0.8,
);

//Ring
eSign.addCurl(Handedness.Left, Finger.Ring, FingerCurl.HalfCurl, 1);
eSign.addDirection(
  Handedness.Left,
  Finger.Ring,
  FingerDirection.VerticalUp,
  0.8,
);

//Pinky
eSign.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.HalfCurl, 1);
eSign.addDirection(
  Handedness.Left,
  Finger.Pinky,
  FingerDirection.VerticalUp,
  0.8,
);

export default eSign;
