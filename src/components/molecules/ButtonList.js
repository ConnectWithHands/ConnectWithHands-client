import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function ButtonList({ width, flexDirection, children }) {
  const cssStyle = {
    flexDirection,
    width,
  };

  return <StyledButtonList {...cssStyle}>{children}</StyledButtonList>;
}

export default ButtonList;

const StyledButtonList = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  align-items: center;
  width: ${(props) => props.width || "auto"};
`;

ButtonList.propTypes = {
  width: PropTypes.string,
  flexDirection: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
