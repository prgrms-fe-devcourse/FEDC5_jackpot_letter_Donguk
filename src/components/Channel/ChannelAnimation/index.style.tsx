import styled from '@emotion/styled';

export const CoveredAnimation = styled.img`
  position: absolute;
  z-index: 1;
  left: 10%;
  @media (max-width: 767px) {
    left: -5%;
  }
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
      transform: scale(0.2);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
`;
