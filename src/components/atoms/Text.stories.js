import React from "react";
import Text from "./Text";

export default {
  title: "Text Component",
  component: Text,
};

const EX_TEXT = "example";

export const TextSmall = () => <Text className="small">{EX_TEXT}</Text>;
export const TextNormal = () => <Text className="normal">{EX_TEXT}</Text>;
export const TextBig = () => <Text className="big">{EX_TEXT}</Text>;
export const TextTitle = () => <Text className="title">{EX_TEXT}</Text>;
export const TextSuper = () => <Text className="super">{EX_TEXT}</Text>;

TextSmall.story = {
  name: "TextSmall",
};
TextNormal.story = {
  name: "TextNormal",
};
TextBig.story = {
  name: "TextTextBigDel",
};
TextTitle.story = {
  name: "TextTitle",
};
TextSuper.story = {
  name: "TextSuper",
};
