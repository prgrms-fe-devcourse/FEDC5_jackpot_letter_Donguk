import styled from '@emotion/styled';

export const OpenIcon = styled.img`
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
export const ChannelButton = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  gap: 1rem;
`;
