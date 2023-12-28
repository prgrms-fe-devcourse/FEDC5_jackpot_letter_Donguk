import styled from '@emotion/styled';
import { buttonTypes, buttonSize } from './type';

export const ButtonStyle = styled.button<{ buttonType: string; size: string }>`
  font-weight: 700;
  ${({ buttonType }) => buttonTypes[buttonType]};
  ${({ size }) => buttonSize[size]};
`;
