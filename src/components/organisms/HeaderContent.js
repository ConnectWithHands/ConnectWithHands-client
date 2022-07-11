import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Header from "../molecules/Header";

function HeaderContent({ title, onClick }) {
  return (
    <StyledHeaderContent>
      <Header onClick={onClick}>{title}</Header>
    </StyledHeaderContent>
  );
}

export default HeaderContent;

const StyledHeaderContent = styled.div`
  display: flex;
  width: 100%;
`;

HeaderContent.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
};
