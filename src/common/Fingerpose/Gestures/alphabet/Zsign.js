import {
  Handedness,
  Finger,
  FingerCurl,
  FingerDirection,
} from "../../FingerDescription";
import GestureDescription from "../../GestureDescription";

const zSign = new GestureDescription("Z");
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Horizontal Left"
//     ],
//     [
//       "Index",
//       "No Curl",
//       "Diagonal Up Left"
//     ],
//     [
//       "Middle",
//       "Full Curl",
//       "Horizontal Left"
//     ],
//     [
//       "Ring",
//       "Full Curl",
//       "Horizontal Left"
//     ],
//     [
//       "Pinky",
//       "Full Curl",
//       "Horizontal Left"
//     ]
//   ]

//Thumb
zSign.addCurl(Handedness.Left, Finger.Thumb, FingerCurl.NoCurl, 0.8);
zSign.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.HorizontalLeft,
  0.7,
);

//Index
zSign.addCurl(Handedness.Left, Finger.Index, FingerCurl.NoCurl, 1);
zSign.addDirection(
  Handedness.Left,
  Finger.Index,
  FingerDirection.DiagonalUpLeft,
  0.7,
);

//Middle
zSign.addCurl(Handedness.Left, Finger.Middle, FingerCurl.FullCurl, 1);
zSign.addDirection(
  Handedness.Left,
  Finger.Middle,
  FingerDirection.HorizontalLeft,
  0.7,
);

//Ring
zSign.addCurl(Handedness.Left, Finger.Ring, FingerCurl.FullCurl, 1);
zSign.addDirection(
  Handedness.Left,
  Finger.Ring,
  FingerDirection.HorizontalLeft,
  0.7,
);

//Pinky
zSign.addCurl(Handedness.Left, Finger.Pinky, FingerCurl.FullCurl, 1);
zSign.addDirection(
  Handedness.Left,
  Finger.Pinky,
  FingerDirection.HorizontalLeft,
  0.7,
);

export default zSign;
