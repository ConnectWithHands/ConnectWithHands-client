import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Text from "../atoms/Text";
import Form from "../molecules/Form";

function FormContent({ title = "", onClick }) {
  const [gestureName, setGesturenName] = useState("");

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setGesturenName(event.target.value);
  };

  const handleGestureAdd = async (value) => {
    await onClick(value);
    setGesturenName("");
  };

  return (
    <Container>
      {title && (
        <Wrapper>
          <Text className="samll">{title}</Text>
        </Wrapper>
      )}
      <Form
        value={gestureName}
        placeholder="학습할 제스처"
        onChange={handleNameChange}
        onClick={handleGestureAdd}
      >
        추가하기
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
  list: PropTypes.array,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
