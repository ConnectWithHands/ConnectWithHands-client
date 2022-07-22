import { atom } from "jotai";
import { LENGTH_LETTER_TYPE, MODAL_TYPE } from "../common/constants";

const increaseIndex = (indexList, letter, initialValue) => ({
  ...indexList,
  [letter]: initialValue === 0 ? 0 : ++indexList[letter],
});

const decreaseIndex = (indexList, letter, initialValue) => ({
  ...indexList,
  [letter]: initialValue || --indexList[letter],
});

const indexOfLetters = atom({
  consonants: 0,
  vowels: 0,
  alphabet: 0,
});

const increaseIndexOfGesture = atom(null, (get, set, letter) => {
  if (LENGTH_LETTER_TYPE[letter] - 1 === get(indexOfLetters)[letter]) {
    set(indexOfLetters, increaseIndex(get(indexOfLetters), letter, 0));
    return;
  }

  set(indexOfLetters, increaseIndex(get(indexOfLetters), letter));
});

const decreaseIndexOfGesture = atom(null, (get, set, letter) => {
  if (!get(indexOfLetters)[letter]) {
    set(
      indexOfLetters,
      decreaseIndex(
        get(indexOfLetters),
        letter,
        LENGTH_LETTER_TYPE[letter] - 1,
      ),
    );
    return;
  }

  set(indexOfLetters, decreaseIndex(get(indexOfLetters), letter));
});

const modalType = atom(MODAL_TYPE.NONE);

export {
  indexOfLetters,
  increaseIndexOfGesture,
  decreaseIndexOfGesture,
  modalType,
};
