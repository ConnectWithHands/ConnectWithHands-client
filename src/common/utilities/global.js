function getPercentage(value) {
  const newValue = value * 10;
  const newValueToStr = newValue + "";

  return `${newValueToStr.substring(0, 4)}%`;
}

function getConstantVowel(kor) {
  const f = [
    "ㄱ",
    "ㄲ",
    "ㄴ",
    "ㄷ",
    "ㄸ",
    "ㄹ",
    "ㅁ",
    "ㅂ",
    "ㅃ",
    "ㅅ",
    "ㅆ",
    "ㅇ",
    "ㅈ",
    "ㅉ",
    "ㅊ",
    "ㅋ",
    "ㅌ",
    "ㅍ",
    "ㅎ",
  ];
  const s = [
    "ㅏ",
    "ㅐ",
    "ㅑ",
    "ㅒ",
    "ㅓ",
    "ㅔ",
    "ㅕ",
    "ㅖ",
    "ㅗ",
    "ㅘ",
    "ㅙ",
    "ㅚ",
    "ㅛ",
    "ㅜ",
    "ㅝ",
    "ㅞ",
    "ㅟ",
    "ㅠ",
    "ㅡ",
    "ㅢ",
    "ㅣ",
  ];
  const t = [
    "",
    "ㄱ",
    "ㄲ",
    "ㄳ",
    "ㄴ",
    "ㄵ",
    "ㄶ",
    "ㄷ",
    "ㄹ",
    "ㄺ",
    "ㄻ",
    "ㄼ",
    "ㄽ",
    "ㄾ",
    "ㄿ",
    "ㅀ",
    "ㅁ",
    "ㅂ",
    "ㅄ",
    "ㅅ",
    "ㅆ",
    "ㅇ",
    "ㅈ",
    "ㅊ",
    "ㅋ",
    "ㅌ",
    "ㅍ",
    "ㅎ",
  ];

  const ga = 44032;
  let uni = kor.charCodeAt(0);

  uni = uni - ga;

  let fn = parseInt(uni / 588);
  let sn = parseInt((uni - fn * 588) / 28);
  let tn = parseInt(uni % 28);

  return {
    f: f[fn],
    s: s[sn],
    t: t[tn],
  };
}

const isiOS = () => {
  return /iPhone|iPod/i.test(navigator.userAgent);
};

const isAndroid = () => {
  return /Android/i.test(navigator.userAgent);
};

const isMobile = () => {
  return isAndroid() || isiOS();
};

export { isMobile, getPercentage, getConstantVowel };
