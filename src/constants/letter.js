const NAME_LETTER_TYPE = {
  consonants: "consonants",
  vowels: "vowels",
};

const LENGTH_LETTER_TYPE = {
  consonants: 19,
  vowels: 17,
};

const consonants = {
  0: "giyeok",
  1: "ssanggiyeok",
  2: "nieun",
  3: "digeut",
  4: "ssangdigeut",
  5: "rieul",
  6: "mieum",
  7: "bieup",
  8: "ssangbieup",
  9: "siot",
  10: "ssangsiot",
  11: "ieung",
  12: "jieut",
  13: "ssangjieut",
  14: "chieut",
  15: "kieuk",
  16: "tieut",
  17: "pieup",
  18: "hieut",

  korName: {
    giyeok: "ㄱ",
    nieun: "ㄴ",
    digeut: "ㄷ",
    rieul: "ㄹ",
    mieum: "ㅁ",
    bieup: "ㅂ",
    siot: "ㅅ",
    ieung: "ㅇ",
    jieut: "ㅈ",
    chieut: "ㅊ",
    kieuk: "ㅋ",
    tieut: "ㅌ",
    pieup: "ㅍ",
    hieut: "ㅎ",
    ssanggiyeok: "ㄲ",
    ssangdigeut: "ㄸ",
    ssangbieup: "ㅃ",
    ssangsiot: "ㅆ",
    ssangjieut: "ㅉ",
  },

  engName: {
    ㄱ: "giyeok",
    ㄴ: "nieun",
    ㄷ: "digeut",
    ㄹ: "rieul",
    ㅁ: "mieum",
    ㅂ: "bieup",
    ㅅ: "siot",
    ㅇ: "ieung",
    ㅈ: "jieut",
    ㅊ: "chieut",
    ㅋ: "kieuk",
    ㅌ: "tieut",
    ㅍ: "pieup",
    ㅎ: "hieut",
    ㄲ: "ssanggiyeok",
    ㄸ: "ssangdigeut",
    ㅃ: "ssangbieup",
    ㅆ: "ssangsiot",
    ㅉ: "ssangjieut",
  },

  getKorName: function (value) {
    return typeof this.korName[value] !== "undefined"
      ? this.korName[value]
      : false;
  },

  getEngName: function (value) {
    return typeof this.engName[value] !== "undefined"
      ? this.engName[value]
      : false;
  },
};

const vowels = {
  0: "a",
  1: "ya",
  2: "eo",
  3: "yeo",
  4: "o",
  5: "yo",
  6: "u",
  7: "yu",
  8: "eu",
  9: "i",
  10: "ae",
  11: "yae",
  12: "e",
  13: "ye",
  14: "oe",
  15: "wi",
  16: "ui",
  17: "wa",
  18: "wo",
  19: "wae",
  20: "we",

  korName: {
    a: "ㅏ",
    ya: "ㅑ",
    eo: "ㅓ",
    yeo: "ㅕ",
    o: "ㅗ",
    yo: "ㅛ",
    u: "ㅜ",
    yu: "ㅠ",
    eu: "ㅡ",
    i: "ㅣ",
    ae: "ㅐ",
    yae: "ㅒ",
    e: "ㅔ",
    ye: "ㅖ",
    oe: "ㅚ",
    wi: "ㅟ",
    ui: "ㅢ",
    wa: "ㅘ",
    wo: "ㅝ",
    wae: "ㅙ",
    we: "ㅞ",
  },

  engName: {
    ㅏ: "a",
    ㅑ: "ya",
    ㅓ: "eo",
    ㅕ: "yeo",
    ㅗ: "o",
    ㅛ: "yo",
    ㅜ: "u",
    ㅠ: "yu",
    ㅡ: "eu",
    ㅣ: "i",
    ㅐ: "ae",
    ㅒ: "yae",
    ㅔ: "e",
    ㅖ: "ye",
    ㅚ: "oe",
    ㅟ: "wi",
    ㅢ: "ui",
    ㅘ: "wa",
    ㅝ: "wo",
    ㅙ: "wae",
    ㅞ: "we",
  },

  getKorName: function (value) {
    return typeof this.korName[value] !== "undefined"
      ? this.korName[value]
      : false;
  },

  getEngName: function (value) {
    return typeof this.engName[value] !== "undefined"
      ? this.engName[value]
      : false;
  },
};

const LETTER = {
  consonants,
  vowels,
};

export { LETTER, NAME_LETTER_TYPE, LENGTH_LETTER_TYPE };
