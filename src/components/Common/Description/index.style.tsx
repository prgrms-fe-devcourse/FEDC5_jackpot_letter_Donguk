import styled from '@emotion/styled';

export const Wrapper = styled.p(({ theme, color }) => ({
  alignSelf: 'flex-start',
  color: color === 'error' ? 'red' : theme.palette.gray_1,
  ...theme.typography.description
}));
