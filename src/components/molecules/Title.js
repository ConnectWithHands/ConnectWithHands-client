import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Text from "../atoms/Text";

function Title({ color, children }) {
  const cssStyle = {
    color,
  };

  return (
    <StyledTitle {...cssStyle}>
      <Text textAlign="center" className="title">
        {children}
      </Text>
    </StyledTitle>
  );
}

export default Title;

const StyledTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: ${(props) => props.color};
`;

Title.propTypes = {
  color: PropTypes.string,
  children: PropTypes.string,
};
