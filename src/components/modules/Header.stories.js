import React from "react";
import Header from "./Header";

export default {
  title: "Header Component",
  component: Header,
};

const TEXT = "example";
const ONCLICK = () => {};

export const HeaderDefault = () => <Header onClick={ONCLICK}>{TEXT}</Header>;

HeaderDefault.story = {
  name: "HeaderDefault",
};
