import { theme } from '@/theme';
import styled from '@emotion/styled';
import { DarkModeProps } from '../Logo/LongLogo';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding: 0 2rem;
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  padding: 0 2rem;
`;

export const LogoWrapper = styled.div`
  align-self: center;
  animation: shake 5s;
  transform-origin: 50% 0;

  animation-iteration-count: infinite;

  @keyframes shake {
    0% {
      transform: rotate(0deg);
    }
    5% {
      transform: rotate(10deg);
    }
    10% {
      transform: rotate(-10deg);
    }
    20% {
      transform: rotate(15deg);
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

export const TitleWrapper = styled.div`
  padding-top: 2rem;
  position: absolute;
  align-self: center;
`;

export const Description = styled.div<DarkModeProps>`
  color: ${(props) =>
    props.darkMode ? theme.darkTheme.bgColor : theme.lightTheme.bgColor};
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
  word-break: keep-all;
`;

export const Main = styled.p`
  font-size: 1.7rem; // 32px
  font-weight: 900;
  line-height: 1.5;
`;

export const Sub = styled.div`
  line-height: 1.5;
`;

export const Pocket = styled.div`
  justify-self: flex-end;
  display: flex;
  gap: 8px;
`;
