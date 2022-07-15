import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import "@testing-library/jest-dom";

import PracticeMain from "../pages/Practice/PracticeMain";
import userEvent from "@testing-library/user-event";

const history = createMemoryHistory();

beforeEach(() => {
  render(
    <BrowserRouter>
      <PracticeMain />
    </BrowserRouter>,
  );
});

describe("practiceMain", () => {
  test("두 개의 예시 이미지가 보여야 합니다.", () => {
    const image1 = screen.getAllByAltText("example")[0];
    const image2 = screen.getAllByAltText("example")[1];

    expect(image1.src).toContain("http://localhost/hangul_consonant.png");
    expect(image2.src).toContain("http://localhost/hangul_vowel.png");
  });

  test("헤더 포함 총 5개의 버튼이 보여야 합니다.", () => {
    const buttonForPractice = screen.getAllByRole("button");

    expect(buttonForPractice).toHaveLength(5);
  });

  test("상단 뒤로 가기버튼을 클릭하면 메인 페이지로 이동해야 합니다.", () => {
    const buttons = screen.getAllByRole("button");
    const backButton = buttons[0];

    userEvent.click(backButton);
    expect(history.location.pathname).toEqual("/");
  });
});
