import React from "react";
import Image from "./Image";

import logo from "../../assets/heart.png";

export default {
  title: "Image Component",
  component: Image,
};

export const ImageComponent = () => (
  <Image width="20%" height="400px" alt="example" src={logo}>
    example
  </Image>
);

ImageComponent.story = {
  name: "Image",
};
