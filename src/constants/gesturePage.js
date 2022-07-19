import handOnScreen from "../assets/sign-language.png";
import learning from "../assets/neural.png";
import IMAGE from "../assets";

export const GESTURE_PAGE = [
  {
    id: 0,
    title: "수어 인식하기",
    description:
      "손을 실시간으로 인식하여 텍스트를 출력합니다. 현재 학습된 수어만 인식 가능합니다.",
    buttonTitle: "인식하기",
    image: handOnScreen,
    page: "handgesture",
  },
  {
    id: 1,
    title: "나만의 제스처 만들기",
    description:
      "실시간으로 제스처를 학습시킬 수 있습니다. 나만의 제스처를 학습시키고 테스트하세요!",
    buttonTitle: "만들기",
    image: learning,
    page: "selfgesture",
  },
];

export const EXAMPLE_IMAGE = [
  { id: 0, src: IMAGE.list.all },
  { id: 1, src: IMAGE.list.consonant },
  { id: 2, src: IMAGE.list.vowel },
  { id: 3, src: handOnScreen },
  { id: 5, src: learning },
  { id: 6, src: learning },
  { id: 7, src: learning },
];
