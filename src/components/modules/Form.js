import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Text from "../atoms/Text";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

function Form({ title = "", type, placeholder, onClick, children }) {
  const [input, setInput] = useState("");

  const handleNameChange = (event) => {
    setInput(event.target.value);
  };

  const handleDataAdd = (value) => {
    onClick(value);
    setInput("");
  };

  return (
    <Container>
      {title && (
        <Wrapper>
          <Text className="samll">{title}</Text>
        </Wrapper>
      )}
      <Wrapper>
        <Input
          type={type}
          className="small"
          value={input}
          placeholder={placeholder}
          onChange={handleNameChange}
        />
        <Button className="small" onClick={() => handleDataAdd(input)}>
          {children}
        </Button>
      </Wrapper>
    </Container>
  );
}

export default Form;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

Form.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
