import { theme } from '@/theme';
import styled from '@emotion/styled';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;

  .back-btn-wrap {
    display: flex;
    align-items: center;

    .back-btn {
      width: 1.875rem;
      height: 1.875rem;
      padding: 0;
      border: none;
      background-color: transparent;
      cursor: pointer;

      svg {
        width: 1.875rem;
        height: 1.875rem;
      }
    }
  }
`;

export const Title = styled.span`
  font-size: ${theme.typography.mypage_regular.fontSize};
`;
