import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function Button({
  flex,
  width,
  height,
  color,
  outline = "none",
  bgColor,
  margin,
  className,
  onClick,
  children,
}) {
  const cssStyle = {
    flex,
    width,
    height,
    color,
    outline,
    bgColor,
    margin,
  };
  return (
    <StyledButton {...cssStyle} className={className} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

export default Button;

const StyledButton = styled.button`
  flex: ${(props) => props.flex || "auto"};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  margin: ${(props) => props.margin || "0.5em"};
  border-radius: 3.7px;
  border: ${(props) =>
    props.outline === "none" ? "none" : `0.7px solid ${props.outline}`};
  background: ${(props) => (props.transparent ? "transparent" : props.bgColor)};
  color: ${(props) => props.color || "black"};
  cursor: pointer;
  outline: none;
  &.small {
    padding: 7px 7px;
    font-size: 1rem;
  }
  &.normal {
    padding: 10px 10px;
    font-size: 1.2rem;
  }
  &.big {
    padding: 14px 14px;
    font-size: 1.4rem;
  }
`;

Button.propTypes = {
  flex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  outline: PropTypes.string,
  bgColor: PropTypes.string,
  margin: PropTypes.string,
  blockWidth: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string,
};
