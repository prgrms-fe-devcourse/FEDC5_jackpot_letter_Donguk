import styled from '@emotion/styled';
import { BtnSize, BtnSort, SizeName, SortName } from './type';

export const ButtonStyle = styled.button<{
  disabled: boolean;
  kind: SortName;
  size: SizeName;
  styleOption?: { [key: string]: string };
}>`
  font-weight: 700;
  overflow: hidden;
  border-radius: 10px;
  white-space: nowrap;
  text-overflow: ellipsis;
  outline: none;
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  ${({ kind }) => BtnSort[kind]}
  ${({ size }) => BtnSize[size]}
  ${({ styleOption }) => styleOption}
`;
