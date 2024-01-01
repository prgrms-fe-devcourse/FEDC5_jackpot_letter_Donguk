import { theme } from '@/theme';
import styled from '@emotion/styled';

export const Container = styled.div`
  height: 100%;
  padding: 1.625rem 1.75rem;
  box-sizing: border-box;

  .name-form {
    display: flex;
    flex-direction: column;
    height: 100%;

    .input-wrap {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      flex-grow: 1;
    }

    .warning-text {
      font-size: ${theme.typography.label.fontSize};
      color: ${theme.palette.error};
    }
  }
`;
