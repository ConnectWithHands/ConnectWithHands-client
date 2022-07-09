import { atom } from "jotai";
import { lengthOfLetter } from "../constants/index";

const increaseIndex = (indexList, gesture) => ({
  ...indexList,
  [gesture]: indexList[gesture] + 1,
});

const initailizeIndex = (indexList, gesture) => ({
  ...indexList,
  [gesture]: 0,
});

const indexOfGestures = atom({
  consonants: 0,
  vowels: 0,
  alphabet: 0,
});

const increaseIndexOfGesture = atom(null, (get, set, gesture) => {
  if (lengthOfLetter[gesture] - 1 === get(indexOfGestures)[gesture]) {
    set(indexOfGestures, initailizeIndex(get(indexOfGestures), gesture));
    return;
  }

  set(indexOfGestures, increaseIndex(get(indexOfGestures), gesture));
});

export { indexOfGestures, increaseIndexOfGesture };

// export const addAlphabet = atom(
//   null,
//   (get, set) => {
//     set(alphabet, addToalphabet(get(alphabet), get(count))); //update 함수
//     set(count, 0); // 카운트 초기화
//   }
// )

// export const updateAlphabet = atom(
//   null,
//   (get, set, text) => {
//     set(alphabet, updateAlphabetList(get(alphabet), text))
//   }
// )
