import React from "react";
import ButtonList from "./ButtonList";
import Button from "../atoms/Button";

export default {
  title: "ButtonList Component",
  component: ButtonList,
};

const TEXT = "example";

export const ButtonListRow = () => (
  <ButtonList width="50%" text={TEXT}>
    <Button height="50px">{TEXT}</Button>
    <Button height="50px">{TEXT}</Button>
  </ButtonList>
);

export const ButtonListColumn = () => (
  <ButtonList flexDirection="column" width="50%" text={TEXT}>
    <Button width="100px" height="50px">
      {TEXT}
    </Button>
    <Button width="100px" height="50px">
      {TEXT}
    </Button>
  </ButtonList>
);

ButtonListRow.story = {
  name: "ButtonListRow",
};
ButtonListColumn.story = {
  name: "ButtonListColumn",
};
