import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function TextList({ children, flexDirection }) {
  const cssStyle = {
    flexDirection,
  };

  return <StyledTextList {...cssStyle}>{children}</StyledTextList>;
}

export default TextList;

const StyledTextList = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
`;

TextList.propTypes = {
  flexDirection: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
