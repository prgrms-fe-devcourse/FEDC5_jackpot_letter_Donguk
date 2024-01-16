import styled from '@emotion/styled';

export const Container = styled.div<{ visible: boolean }>`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);

  &.relative {
    ${(props) => (props.visible ? 'block' : 'none')};
  }
`;

export const ModalContainer = styled.div<{
  visible: boolean;
  width: number;
  height: number;
  padding: number;
  radius: number;
  bgColor: string;
  top?: number;
  left?: number;
  marginTop?: number;
}>`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  width: ${(props) => props.width}rem;
  height: ${(props) => props.height}rem;
  padding: ${(props) => `${props.padding}rem` || '1rem'};
  border-radius: ${(props) => props.radius}px;
  background-color: ${(props) => props.bgColor};
  box-shadow:
    0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  color: black;
  &.relative {
    position: absolute;
    /* 해당 요소의 좌표가 px로 받아와지기 때문에 단위를 px로 표현 */
    top: ${(props) => props.top}px;
    left: ${(props) => props.left}px;
    transform: ${(props) => `translate(-100%, ${props.marginTop}rem)`};
  }
  z-index: 11;
`;
