import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function Text({
  color = "inherit",
  textAlign,
  width = "auto",
  blockWidth = false,
  className,
  children,
}) {
  const cssStyle = {
    color,
    textAlign,
    width,
    blockWidth,
  };

  return (
    <StyledSpan {...cssStyle} className={className}>
      {children}
    </StyledSpan>
  );
}

export default Text;

const StyledSpan = styled.span`
  color: ${(props) => props.color || "black"};
  text-align: ${(props) => props.textAlign || "center"};
  width: ${(props) => (props.blockWidth ? "100%" : props.width)};
  word-wrap: break-word;
  word-break: break-all;
  white-space: pre-wrap;
  &.del {
    text-decoration: line-through;
  }
  &.small {
    padding: 0.5em 0.3em;
    font-size: 1rem;
  }
  &.normal {
    padding: 0.7em 1em;
    /* padding: 0.7em 0.5em; */
    font-size: 1.2rem;
  }
  &.big {
    padding: 1em 0.9em;
    font-size: 1.2rem;
    font-weight: bold;
  }
  &.title {
    padding: 0.7em 0.7em;
    font-size: 1.5rem;
    font-weight: bold;
  }
  &.super {
    font-size: 3rem;
    font-weight: bold;
  }
`;

Text.propTypes = {
  color: PropTypes.string,
  textAlign: PropTypes.string,
  width: PropTypes.string,
  size: PropTypes.string,
  blockWidth: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.string,
};
