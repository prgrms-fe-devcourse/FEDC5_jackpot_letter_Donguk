import { theme } from '@/theme';
import styled from '@emotion/styled';

export const FollowBtn = styled.button<{ color: string }>`
  width: 5rem;
  height: 2rem;
  border-radius: 10px;
  border: none;
  background-color: ${(props) => props.color};
  font-size: ${theme.typography.mypage_small.fontSize};
  font-weight: bold;
  cursor: pointer;
`;
