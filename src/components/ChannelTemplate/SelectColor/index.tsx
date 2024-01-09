import { Dispatch, SetStateAction } from 'react';
import { useAtomValue } from 'jotai';
import CustomChannelIcon from '@/components/Common/CustomChannelIcon';
import { ChannelIconList, Title } from '@/pages/ChannelList/index.style.tsx';
import { channelNameAtom } from '@/store/auth';
import { theme } from '@/theme';
import { ChannelOptionType } from '@/types/channel';
import { css } from '@emotion/react';
import { Background } from '../SelectBackground/index.style';
import { Item } from './index.style';
import { ColorName, ColorType } from './type';

interface Props {
  option: ChannelOptionType;
  setOption: Dispatch<SetStateAction<ChannelOptionType>>;
}

export const selectedStyle = css`
  width: calc(5.625rem - 7px);
  height: calc(5.625rem - 7px);
  border: 3px solid ${theme.palette.main};
`;

function SelectColor({ option, setOption }: Props) {
  const channelName = useAtomValue(channelNameAtom);

  return (
    <Background selectedValue={option.background}>
      <Title>
        <h1>
          <span>{channelName}</span>님의 박
        </h1>
        <span>내 채널의 박을 선택해주세요</span>
      </Title>
      <ChannelIconList>
        {Object.keys(ColorType).map((color) => (
          <Item
            role="button"
            key={`channel-color${color}`}
            css={option.color === color && selectedStyle}
            onClick={() => setOption({ ...option, color: color as ColorName })}>
            <CustomChannelIcon color={ColorType[color as ColorName]} />
          </Item>
        ))}
      </ChannelIconList>
    </Background>
  );
}

export default SelectColor;
