import { theme } from '@/theme';
import styled from '@emotion/styled';

export const Container = styled.div<{ darkMode: boolean }>`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100svh;
  background-color: ${(props) =>
    props.darkMode ? theme.darkTheme.bgColor : theme.lightTheme.bgColor};
`;
