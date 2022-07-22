import IMAGE from "../../assets";

export const PRACTICE_LIST = [
  {
    id: 0,
    title: "자음",
    description: "총 14개",
    image: IMAGE.list.consonant,
    page: "detail/consonants",
  },
  {
    id: 1,
    title: "모음",
    description: "총 17개",
    image: IMAGE.list.vowel,
    page: "detail/vowels",
  },
  {
    id: 2,
    title: "자/모음",
    description: "자율 연습",
    image: IMAGE.list.all,
    page: "detail/all",
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

export const PRACTICE_SELECT = [
  { id: 0, value: "consonants", title: "자음" },
  { id: 1, value: "vowels", title: "모음" },
];
