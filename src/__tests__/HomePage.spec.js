import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";

import Main from "../pages/Main";
import userEvent from "@testing-library/user-event";

beforeEach(() => {
  render(
    <BrowserRouter>
      <Main />
    </BrowserRouter>,
  );
});

describe("MainPage", () => {
  test("최초 메인 페이지에 logo 이미지가 보여야 합니다.", () => {
    expect(screen.getByAltText("logo")).toBeInTheDocument();
  });

  test("최초 메인 페이지에 타이틀이 보여야 합니다.", () => {
    expect(screen.getByText("수어지교(手語之交)")).toBeInTheDocument();
  });

  test("최초 메인 페이지에 button 두 개가 보여야 합니다.", () => {
    const button = screen.getAllByRole("button");

    expect(button).toHaveLength(2);
  });

  //버튼 클릭 시 페이지 이동
});
