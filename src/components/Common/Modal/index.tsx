import React, { useEffect, useMemo } from 'react';
import { css } from '@emotion/react';
import ReactDOM from 'react-dom';

interface ModalProps {
  children: React.ReactElement;
  width: number;
  height: number;
  bgColor?: string;
  radius?: number;
  padding?: number;
  visible: boolean;
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

  return ReactDOM.createPortal(
    <div
      onClick={(e: React.MouseEvent<HTMLDivElement>) => handleModalClose(e)}
      css={css`
        display: ${visible ? 'flex' : 'none'};
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.2);
      `}>
      <div
        id="modal"
        css={css`
          display: ${visible ? 'block' : 'none'};
          width: ${width}rem;
          height: ${height}rem;
          padding: ${`${padding}rem` || '1rem'};
          border-radius: ${radius}px;
          background-color: ${bgColor};
          box-shadow:
            0 10px 20px rgba(0, 0, 0, 0.19),
            0 6px 6px rgba(0, 0, 0, 0.1);
          box-sizing: border-box;
        `}>
        {children}
      </div>
    </div>,
    el
  );
}

export default Modal;
