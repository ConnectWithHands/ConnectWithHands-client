import React from "react";
import Form from "./Form";

export default {
  title: "Form Component",
  component: Form,
};

const TEXT = "example";
const ONCLICK = () => {};

export const FormDefault = () => (
  <Form width="50%" placeholder={TEXT} onClick={ONCLICK}>
    {TEXT}
  </Form>
);

FormDefault.story = {
  name: "FormDefault",
};
