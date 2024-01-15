import styled from '@emotion/styled';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.p(({ theme, color }) => ({
  paddingBottom: '0.3rem',
  ...theme.typography.label,
  color: color
}));

export const StyledInput = styled.input(({ theme, width, height, color }) => ({
  width: width,
  height: height,
  padding: '0 1.25rem',
  border:
    color === 'error'
      ? `1px solid ${theme.palette.error}`
      : `0.9px solid ${theme.palette.gray_2}`,
  borderRadius: '3px'
}));
