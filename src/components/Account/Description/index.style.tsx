import { theme } from '@/theme';
import styled from '@emotion/styled';

interface Color {
  [key: string]: string;
}

const colorTypes: { [key: string]: Color } = {
  main: {
    color: theme.palette.gray_1
  },
  error: {
    color: 'red'
  },
  green: {
    color: theme.palette.main
  }
};

export const Wrapper = styled.p<{ color: string }>`
  align-self: flex-start;
  font-size: 0.75rem;
  font-weight: 900;
  ${({ color }) => colorTypes[color]};
`;
