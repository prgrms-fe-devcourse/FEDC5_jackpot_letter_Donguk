import { theme } from '@/theme';
import styled from '@emotion/styled';

export const FollowBtn = styled.button<{
  color?: string;
  width?: string;
  height?: string;
}>`
  width: ${(props) => props.width || '5rem'};
  height: ${(props) => props.height || '2rem'};
  border-radius: 10px;
  border: none;
  background-color: ${(props) => props.color || '#d9d9d9'};
  font-size: ${(props) =>
    props.width
      ? theme.typography.mypage_regular.fontSize
      : theme.typography.mypage_small.fontSize};
  color: ${(props) => (props.color === theme.palette.main ? 'white' : 'black')};
  font-weight: bold;
  cursor: pointer;
`;
