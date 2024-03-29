import styled from '@emotion/styled';

export const Body = styled.div`
  height: 100vh;
  overflow: hidden;
  z-index: 1;
`;
export const OpenIcon = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 11.5rem);
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
