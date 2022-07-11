import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Input from "../atoms/Input";
import Button from "../atoms/Button";

function Form({ value, type, placeholder, onChange, onClick, children }) {
  return (
    <StyledForm>
      <Input
        type={type}
        className="small"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      <Button height="60%" className="small" onClick={() => onClick(value)}>
        {children}
      </Button>
    </StyledForm>
  );
}

export default Form;

const StyledForm = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

Form.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
