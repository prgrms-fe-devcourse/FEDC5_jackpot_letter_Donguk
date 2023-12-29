import styled from '@emotion/styled';
import { buttonTypes, buttonSize } from './type';

export const ButtonStyle = styled.button<{
  disabled: boolean;
  kind: string;
  size: string;
  styleOption: { [key: string]: string };
}>`
  font-weight: 700;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  ${({ kind }) => buttonTypes[kind]};
  ${({ size }) => buttonSize[size]};
  ${({ styleOption }) => styleOption}

  &:focus, &:hover {
    outline: none;
    border: none;
  }
`;
