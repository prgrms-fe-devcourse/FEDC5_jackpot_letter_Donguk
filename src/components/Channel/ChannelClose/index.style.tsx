import styled from '@emotion/styled';

export const AnnounceBox = styled.div`
  border-radius: 10px;
  position: absolute;
  bottom: 30vh;
  left: calc(50% - 9rem);
  padding: 2rem;
  width: 14.75rem;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-weight: 600;
  animation: fade 3s;
  animation-fill-mode: forwards;
  @keyframes fade {
    0% {
      opacity: 100%;
    }
    10% {
      transform: scale(1.1);
    }
    20% {
      transform: scale(1);
    }
    30% {
      transform: scale(1.1);
    }
    100% {
      opacity: 0%;
    }
  }
`;

export const Pointer = styled.img`
  position: absolute;
  transform: rotate(90deg);
  animation: diagonal 1.1s infinite;

  @keyframes diagonal {
    0% {
      top: 20%;
      left: calc(50% - 9rem);
    }
    50% {
      top: calc(20% - 0.3rem);
      left: calc(50% - 9.3rem);
    }
    100% {
      top: 20%;
      left: calc(50% - 9rem);
    }
  }
`;

export const ChannelIcon = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 7rem);
  transform-origin: 50% 0%;
  cursor: pointer;
  animation: shake 5s;

  animation-iteration-count: infinite;

  @keyframes shake {
    0% {
      transform: rotate(0deg);
    }
    5% {
      transform: rotate(5deg);
    }
    10% {
      transform: rotate(-5deg);
    }
    20% {
      transform: rotate(7deg);
    }
    30% {
      transform: rotate(-3deg);
    }
    40% {
      transform: rotate(3deg);
    }
    50% {
      transform: rotate(0deg);
    }
  }
`;
