import { atom } from "jotai";
import { lengthOfLetter } from "../constants/index";

const changeIndex = (indexList, letter, newIndex) => ({
  ...indexList,
  [letter]: newIndex,
});

const initailizeIndex = (indexList, letter) => ({
  ...indexList,
  [letter]: 0,
});

const indexOfLetters = atom({
  consonants: 0,
  vowels: 0,
  alphabet: 0,
});

const changeIndexOfGesture = atom(null, (get, set, gesture) => {
  const { letter, index } = gesture;
  if (lengthOfLetter[letter] - 1 === get(indexOfLetters)[letter]) {
    set(indexOfLetters, initailizeIndex(get(indexOfLetters), letter));
    return;
  }

  set(indexOfLetters, changeIndex(get(indexOfLetters), letter, index));
});

export { indexOfLetters, changeIndexOfGesture };
