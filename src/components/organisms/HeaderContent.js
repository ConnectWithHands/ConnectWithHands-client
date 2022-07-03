import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

import Header from "../molecules/Header";

function HeaderContent({ title }) {
  const navigate = useNavigate();

  const moveToPreviousPage = () => {
    navigate(-1);
  };

  return (
    <StyledHeaderContent>
      <Header onClick={moveToPreviousPage}>{title}</Header>
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
};
