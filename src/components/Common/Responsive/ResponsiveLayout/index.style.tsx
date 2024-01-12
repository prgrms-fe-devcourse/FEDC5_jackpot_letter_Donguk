import { theme } from '@/theme';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface WrapperProps {
  isTablet: boolean;
  isPc: boolean;
  darkMode: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

export const Wrapper = styled.div<WrapperProps>`
  width: 35.938rem;

  background-color: ${(props) =>
    props.darkMode ? theme.darkTheme.bgColor : theme.lightTheme.bgColor};
  ${(props) =>
    (props.isTablet || props.isPc) &&
    css`
      border-left: 0.5px solid;
      border-right: 0.5px solid;
    `}
`;
