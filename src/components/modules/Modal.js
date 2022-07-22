import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

import { media } from "../../styles/media";

const Modal = ({ onClose, children }) => {
  const element = document.getElementById("modal");

  return ReactDOM.createPortal(
    <Background>
      <Content>
        <ModalButton onClick={onClose}>x</ModalButton>
        {children}
      </Content>
    </Background>,
    element,
  );
};

export default Modal;

const Background = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.3);
  text-align: center;
  font-family: "Noto Sans CJK KR";
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50%;
  width: 50%;
  position: relative;
  overflow-y: scroll;
  background: white;

  ${media.small`
    height: 50%;
    width: 80%;
    flex-direction: column;
  `}
`;

const ModalButton = styled.button`
  border: none;
  margin-bottom: 10px;
  background-color: white;
  font-size: 20px;
  cursor: pointer;
`;

Modal.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
