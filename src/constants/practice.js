import ImageOfLetters from "../assets/image";

export const PRACTICE_LIST = [
  {
    id: 0,
    title: "한글 자음",
    description: "총 14개",
    image: ImageOfLetters.list.consonant,
  },
  {
    id: 1,
    title: "한글 모음",
    description: "총 17개",
    image: ImageOfLetters.list.vowel,
  },
  {
    id: 2,
    title: "알파벳",
    description: "총 26개",
    image: ImageOfLetters.list.alphabet,
  },
];

export const PRACTICE_TITLE = {
  0: "consonants",
  1: "vowels",
  2: "alphabet",
};

export const PRACTICE_DETECTED = {
  UNMATCHED: "불일치",
  MATCHED: "일치",
  NONE: "탐지 전 ",
};
