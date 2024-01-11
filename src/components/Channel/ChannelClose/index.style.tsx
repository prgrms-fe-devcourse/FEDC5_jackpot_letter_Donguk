import styled from '@emotion/styled';

export const AnnounceBox = styled.div`
  border-radius: 10px;
  position: absolute;
  bottom: 30vh;
  left: 10vw;
  padding: 2rem;
  width: 14.75rem;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.3);
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
  top: calc(50vh - 14rem);
  left: calc(50vw - 8rem);
  transform: rotate(90deg);
  animation: loop 1.1s infinite;

  @keyframes loop {
    0% {
      top: calc(50vh - 14rem);
      left: calc(50vw - 8rem);
    }
    50% {
      top: calc(50vh - 14.3rem);
      left: calc(50vw - 8.3rem);
    }
    100% {
      top: calc(50vh - 14rem);
      left: calc(50vw - 8rem);
    }
  }
`;

export const ChannelIcon = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50vw - 7rem);
  transform-origin: 50% 0%;
  animation: shake 5s;

  animation-iteration-count: infinite;

  @keyframes shake{
    0%{
      transform: rotate(0deg);
    }
    5%{
      transform: rotate(5deg);
    }
    10%{
      transform: rotate(-5deg);
    }
    20%{
      transform: rotate(7deg);
    }
    30%{
      transform: rotate(-3deg);
    }
    40%{
      transform: rotate(3deg);
    }
    50%{
      transform: rotate(0deg);
    }
   
`;
