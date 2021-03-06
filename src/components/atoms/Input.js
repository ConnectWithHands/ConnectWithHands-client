import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function Input({
  className,
  type = "text",
  name,
  value,
  width,
  placeholder,
  onChange,
}) {
  const cssStyle = {
    width,
  };

  return (
    <StyledInput
      {...cssStyle}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
    />
  );
}

export default Input;

const StyledInput = styled.input`
  display: inline-block;
  border: 0.3px solid lightgray;
  padding: 0 1rem;
  width: ${(props) => props.width || "auto"};
  margin: 0.5rem 0;
  &.small {
    min-height: 1.3em;
    font-size: 1rem;
    padding: 0.9em 1.2em;
  }
  &.normal {
    min-height: 1.8em;
    font-size: 1.2rem;
    padding: 0.7em 1.5em;
  }
  &.big {
    min-height: 2.1em;
    font-size: 1.8rem;
    padding: 0.26em 1.2em;
  }
`;

Input.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};
