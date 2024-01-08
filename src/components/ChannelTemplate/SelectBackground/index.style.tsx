import styled from '@emotion/styled';
import { BgName, BgType } from './type';

export const Background = styled.div<{ selectedValue: BgName }>`
  width: 100vw;
  height: 100vh;
  background-image: ${({ selectedValue }) =>
    `url("/src/assets/background/${selectedValue}.png")`};
  background-repeat: no-repeat;
  background-size: cover;
  color: ${({ selectedValue }) =>
    BgType[selectedValue] === 'dark' ? 'white' : 'black'};
`;

export const Item = styled.div`
  margin: 0.5rem;
  width: 5.625rem;
  height: 5.625rem;
  border-radius: 10px;
  object-fit: fill;
  box-shadow: 1px 1px 10px ${({ theme }) => theme.palette.gray_2};
`;
