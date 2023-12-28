import React, { useEffect, useMemo } from 'react';
import { Container, ModalContainer } from './index.style';
import ReactDOM from 'react-dom';

interface ModalProps {
  children: React.ReactElement;
  width: number;
  height: number;
  bgColor?: string;
  radius?: number;
  padding?: number;
  visible: boolean;
  type: 'center' | 'relative';
  top?: number;
  left?: number;
  marginTop?: number;
  handleModalClose: (e: React.MouseEvent<HTMLDivElement>) => void;
}

function Modal({
  children,
  width,
  height,
  bgColor = 'white',
  radius = 10,
  padding = 1,
  visible,
  type,
  top,
  left,
  marginTop,
  handleModalClose
}: ModalProps) {
  const el = useMemo(() => document.createElement('div'), []);
  el.id = 'modal-container';

  useEffect(() => {
    document.body.appendChild(el);

    return () => {
      document.body.removeChild(el);
    };
  });

  const modalProps = {
    visible,
    width,
    height,
    bgColor,
    radius,
    padding,
    top,
    left,
    marginTop
  };

  return ReactDOM.createPortal(
    <Container
      className={type}
      visible={visible}
      onClick={(e: React.MouseEvent<HTMLDivElement>) => handleModalClose(e)}>
      <ModalContainer
        id="modal"
        className={type}
        {...modalProps}>
        {children}
      </ModalContainer>
    </Container>,
    el
  );
}

export default Modal;
