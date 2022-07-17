import React from "react";
import Button from "./Button";

export default {
  title: "Button Component",
  component: Button,
};

export const ButtonDefault = () => (
  <Button height="50px" className="small">
    example
  </Button>
);

export const ButtonOutline = () => (
  <Button height="50px" outline="black" className="normal">
    example
  </Button>
);

export const ButtonWithColor = () => (
  <Button height="50px" className="normal" bgColor="#D3CEDF">
    example
  </Button>
);

ButtonDefault.story = {
  name: "ButtonDefault",
};

ButtonWithColor.story = {
  name: "ButtonColor",
};
