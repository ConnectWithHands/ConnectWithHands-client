import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Button from "../atoms/Button";

function ButtonList({ flexDirection, children }) {
  const cssStyle = {
    flexDirection,
  };

  return <StyledButtonList {...cssStyle}>{children}</StyledButtonList>;
}

export default ButtonList;

const StyledButtonList = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
`;

ButtonList.propTypes = {
  flexDirection: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
