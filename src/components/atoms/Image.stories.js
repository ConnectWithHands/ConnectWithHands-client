import React from "react";
import Image from "./Image";

import IMAGE from "../../assets";

export default {
  title: "Image Component",
  component: Image,
};

export const ImageComponent = () => (
  <Image width="20%" height="400px" alt="example" src={IMAGE.icon.heart}>
    example
  </Image>
);

ImageComponent.story = {
  name: "Image",
};
