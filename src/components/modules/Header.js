import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Button from "../atoms/Button";
import Title from "./Title";

function Header({ title, onClick }) {
  return (
    <StyledHeader>
      <Button
        width="50px"
        height="40px"
        className="small"
        onClick={onClick}
      >{`<`}</Button>
      <Wrapper>
        <Title color="black">{title}</Title>
      </Wrapper>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  margin: 0.5em;
`;

const Wrapper = styled.div`
  width: 100%;
  margin-right: 1.5em;
`;

Header.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
};
