import { theme } from '@/theme';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  .info-text {
    font-size: ${theme.typography.mypage_regular.fontSize};
    color: #9e9e9e;
  }
`;
