import { theme } from '@/theme';
import styled from '@emotion/styled';

export const Container = styled.div<{ isMypage: boolean; darkMode: boolean }>`
  height: 100svh;
  display: ${(props) => (props.isMypage ? 'block' : 'flex')};
  box-sizing: border-box;
  overflow-y: auto;

  background-color: ${(props) =>
    props.darkMode ? theme.darkTheme.bgColor : theme.lightTheme.bgColor};
`;
