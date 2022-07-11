import ImageOfLetters from "../assets/image";

export const PRACTICE_LIST = [
  {
    id: 0,
    title: "자음",
    description: "총 14개",
    image: ImageOfLetters.list.consonant,
    page: "consonants",
  },
  {
    id: 1,
    title: "모음",
    description: "총 17개",
    image: ImageOfLetters.list.vowel,
    page: "vowels",
  },
];

export const PRACTICE_TITLE = {
  consonants: "자음",
  vowels: "모음",
};

export const PRACTICE_DETECTED = {
  UNMATCHED: "불일치",
  MATCHED: "일치",
  NONE: "탐지 전 ",
};
