import { css } from "styled-components";

const breakpoints = {
  small: "@media screen and (max-width: 480px)",
  medium: "@media screen and (max-width: 1047px)",
  large: "@media screen and (min-width: 1048px)",
};

const media = Object.entries(breakpoints).reduce((acc, [key, value]) => {
  return {
    ...acc,
    [key]: (...args) => css`
      ${value} {
        ${css(...args)}
      }
    `,
  };
}, {});

export { media };
