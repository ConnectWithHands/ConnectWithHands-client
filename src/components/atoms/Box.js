import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

//굳이 필요한가?

function Box({ width, height, bgColor = "white", flexDirection, children }) {
  const cssStyle = {
    width,
    height,
    bgColor,
    flexDirection,
  };

  return <StyledBox {...cssStyle}>{children}</StyledBox>;
}

export default Box;

const StyledBox = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  bgcolor: ${(props) => props.bgColor};
`;

Box.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  bgColor: PropTypes.string,
  flexDirection: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
