import { theme } from '@/theme';
import styled from '@emotion/styled';

export const UnGeneratedWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 100%;

  .info-text {
    font-size: ${theme.typography.mypage_regular.fontSize};
    font-weight: bold;
  }
`;
