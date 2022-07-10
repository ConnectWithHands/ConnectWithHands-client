const lengthOfLetter = {
  consonants: 14,
  vowels: 17,
  alphabet: 26,
};

const consonants = {
  0: "giyeok",
  1: "nieun",
  2: "digeut",
  3: "rieul",
  4: "mieum",
  5: "bieup",
  6: "siot",
  7: "ieung",
  8: "jieut",
  9: "chieut",
  10: "kieuk",
  11: "tieut",
  12: "pieup",
  13: "hieut",

  name: {
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
  },

  getName: function (value) {
    return typeof this.name[value] !== "undefined" ? this.name[value] : false;
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

  name: {
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
  },

  getName: function (value) {
    return typeof this.name[value] !== "undefined" ? this.name[value] : false;
  },
};

const alphabet = {
  0: "A",
  1: "B",
  2: "C",
  3: "D",
  4: "E",
  5: "F",
  6: "G",
  7: "H",
  8: "I",
  9: "J",
  10: "K",
  11: "L",
  12: "M",
  13: "N",
  14: "O",
  15: "P",
  16: "Q",
  17: "R",
  18: "S",
  19: "T",
  20: "U",
  21: "V",
  22: "W",
  23: "X",
  24: "Y",
  25: "Z",

  name: {
    A: "a",
    B: "b",
    C: "c",
    D: "d",
    E: "e",
    F: "f",
    G: "g",
    H: "h",
    I: "i",
    J: "j",
    K: "k",
    L: "l",
    M: "m",
    N: "n",
    O: "o",
    P: "p",
    Q: "q",
    R: "r",
    S: "s",
    T: "t",
    U: "u",
    V: "v",
    W: "w",
    X: "x",
    Y: "y",
    Z: "z",
  },

  getName: function (value) {
    return typeof this.name[value] !== "undefined" ? this.name[value] : false;
  },
};

const Letter = {
  consonants,
  vowels,
  alphabet,
};

export { Letter, lengthOfLetter };
