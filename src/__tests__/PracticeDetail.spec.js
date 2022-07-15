import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import HandGesture from "../pages/Gesture/HandGesture";

import PracticeDetail from "../pages/Practice/PracticeDetail";
import userEvent from "@testing-library/user-event";

import { Letter } from "../constants";

beforeEach(() => {
  render(
    <BrowserRouter>
      <HandGesture />
    </BrowserRouter>,
  );
});

describe("practiceMain", () => {
  test("두 개의 예시 이미지가 보여야 합니다.", () => {});
});
