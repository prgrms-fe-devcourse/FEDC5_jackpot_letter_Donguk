import styled from '@emotion/styled';
import { BgName, BgType } from './type';

export const Background = styled.div<{ selectedValue: BgName }>`
  position: relative;
  height: 100vh;
  background-image: ${({ selectedValue }) =>
    `url('/assets/images/background/${selectedValue}.png')`}
  background-repeat: no-repeat;
  background-size: cover;
  color: ${({ selectedValue }) =>
    BgType[selectedValue] === 'dark' ? 'white' : 'black'};
`;

export const Item = styled.img<{
  size: string;
  styleOption?: { [key: string]: string };
}>`
  margin: 0.5rem;
  width: ${({ size }) => `calc(${size} + 3rem)`};
  height: ${({ size }) => `calc(${size} + 3rem)`};
  @media (max-width: 767px) {
    width: ${({ size }) => size};
    height: ${({ size }) => size};
  }
  border-radius: 10px;
  object-fit: fill;
  box-shadow: 1px 1px 7px ${({ theme }) => theme.palette.gray_2};
  ${({ styleOption }) => styleOption}
`;
