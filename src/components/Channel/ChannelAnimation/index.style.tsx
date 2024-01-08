import styled from '@emotion/styled';

export const CoveredAnimation = styled.img`
  position: fixed;
  top: 0px;
  z-index: 1;
  left: -1rem;
  animation: wave 2s linear;
  animation-fill-mode: forwards;
  @keyframes wave {
    0% {
      transform: scale(3);
      opacity: 0.2;
    }
    30% {
      transform: scale(3);
      opacity: 1;
    }
    50% {
      transform: scale(1);
    }
    70% {
      transform: scale(0.1);
      opacity: 1;
    }
    100% {
      transform: scale(0.4);
      opacity: 0;
    }
  }
`;
