import { theme } from '@/theme';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .info-container {
    display: flex;
    flex-grow: 1;
    align-items: flex-end;
    font-size: ${theme.typography.mypage_regular.fontSize};
  }
`;

export const InfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  height: 2rem;
  padding: 0.5rem 0.7rem;
  border-radius: 5px;
  background-color: ${theme.palette.main};
  animation: fadeInUp 1s;
  color: white;

  .button {
    padding: 0px;
    border: none;
    background-color: transparent;
    font-weight: bold;
    color: white;
    cursor: pointer;
  }

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }
`;
