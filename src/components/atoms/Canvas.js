import React, { forwardRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function Canvas(props, ref) {
  return <StyledCanvas ref={ref} />;
}

export default forwardRef(Canvas);

const StyledCanvas = styled.canvas`
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 4;
  width: 360px;
  height: auto;
`;

Canvas.propTypes = {
  props: PropTypes.string,
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.elementType }),
  ]),
};
