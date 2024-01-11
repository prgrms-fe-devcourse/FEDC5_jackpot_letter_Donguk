import styled from '@emotion/styled';
import { PositionType } from './position';

export const LetterContainer = styled.div`
  position: absolute;
  height: 55vh;
  width: 100vw;
  bottom: 0;
`;
export const Letter = styled.div<{
  position: PositionType;
}>`
  position: absolute;
  width: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
  img {
    width: 3rem;
    height: 3.5rem;
  }
  span {
    display: block;
    font-size: small;
    text-align: center;
    width: 4rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  ${({ position }) => position}
`;
