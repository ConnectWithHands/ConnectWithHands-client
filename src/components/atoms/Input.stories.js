import React from "react";
import Input from "./Input";

export default {
  title: "Input Component",
  component: Input,
};

const TEXT = "example";

export const InputText = () => (
  <Input type="text" className="small" placeholder={TEXT} />
);

export const InputFile = () => <Input type="file" className="small" />;

InputText.story = {
  name: "InputFile",
};

InputFile.story = {
  name: "InputFile",
};
