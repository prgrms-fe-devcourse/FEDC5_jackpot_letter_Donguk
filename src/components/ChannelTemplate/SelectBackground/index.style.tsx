import { getImageUrl } from '@/utils/parse';
import styled from '@emotion/styled';
import { BgName, BgType } from './type';

export const Background = styled.div<{ selectedValue: BgName }>`
  position: relative;
  height: 100vh;
  background-image: url(${({ selectedValue }) => getImageUrl(selectedValue)});
  background-repeat: no-repeat;
  background-size: cover;
  color: ${({ selectedValue }) =>
    BgType[selectedValue] === 'dark' ? 'white' : 'black'};
`;

export const Item = styled.img<{
  styleOption?: { [key: string]: string };
}>`
  width: 90%;
  object-content: fill;
  height: 90%;
  border-radius: 10px;
  box-shadow: 1px 1px 7px ${({ theme }) => theme.palette.gray_2};
  ${({ styleOption }) => styleOption}
`;
