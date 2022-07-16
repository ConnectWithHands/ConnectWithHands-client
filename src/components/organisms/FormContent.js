import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Text from "../atoms/Text";
import Form from "../molecules/Form";

function FormContent({ title = "", placeholder, onClick }) {
  const [input, setInput] = useState("");

  const handleNameChange = (event) => {
    setInput(event.target.value);
  };

  const handleDataAdd = async (value) => {
    await onClick(value);
    setInput("");
  };

  return (
    <Container>
      {title && (
        <Wrapper>
          <Text className="samll">{title}</Text>
        </Wrapper>
      )}
      <Form
        value={input}
        placeholder={placeholder}
        onChange={handleNameChange}
        onClick={handleDataAdd}
      >
        입력하기
      </Form>
    </Container>
  );
}

export default FormContent;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0.5rem 0;
`;

FormContent.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  list: PropTypes.array,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
