import styled from '@emotion/styled';

export const Body = styled.div`
  height: 100vh;
  width: 50vw;
  overflow: hidden;
  z-index: 1;
`;
export const OpenIcon = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50vw - 11rem);
  animation: appear 4s;
  @keyframes appear {
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
  }
`;
