import IMAGE from "../../assets";

export const GESTURE_PAGE = [
  {
    id: 0,
    title: "수어 인식하기",
    description:
      "손을 실시간으로 인식하여 텍스트를 출력합니다. 현재 학습된 수어만 인식 가능합니다.",
    buttonTitle: "인식하기",
    image: IMAGE.icon.signLanguage,
    page: "handgesture",
  },
  {
    id: 1,
    title: "나만의 제스처 만들기",
    description:
      "실시간으로 제스처를 학습시킬 수 있습니다. 나만의 제스처를 학습시키고 테스트하세요!",
    buttonTitle: "만들기",
    image: IMAGE.icon.neural,
    page: "selfgesture",
  },
];

export const EXAMPLE_IMAGE = [
  { id: 0, url: IMAGE.words.victory },
  { id: 1, url: IMAGE.words.okay },
  { id: 2, url: IMAGE.words.hello },
  { id: 3, url: IMAGE.words.fist },
  { id: 5, url: IMAGE.words.love },
  { id: 6, url: IMAGE.words.thank },
  { id: 7, url: IMAGE.words.day },
  { id: 8, url: IMAGE.words.glad },
];
