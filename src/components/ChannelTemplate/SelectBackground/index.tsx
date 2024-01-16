import { Dispatch, SetStateAction } from 'react';
import { useAtomValue } from 'jotai';
import { ChannelIconList, Title } from '@/pages/ChannelList/index.style.tsx';
import { channelNameAtom } from '@/store/auth';
import { ChannelOptionType } from '@/types/channel';
import { selectedStyle } from '../SelectColor';
import { Background, Item } from './index.style';
import { BgName, BgType } from './type';

interface Props {
  option: ChannelOptionType;
  setOption: Dispatch<SetStateAction<ChannelOptionType>>;
}

function SelectBackground({ option, setOption }: Props) {
  const channelName = useAtomValue(channelNameAtom);
  return (
    <Background selectedValue={option.background}>
      <Title>
        <h1>
          <span>{channelName}</span>님의 배경
        </h1>
        <span>내 채널의 배경을 선택해주세요</span>
      </Title>
      <ChannelIconList>
        {Object.keys(BgType).map((item) => (
          <div key={`channel-background${item}`}>
            <Item
              size={'5.5rem'}
              css={option.background === item && selectedStyle}
              src={`${
                import.meta.env.VITE_PUBLIC_URL
              }/images/background/${item}.png`}
              alt={`background-image-${item}`}
              onClick={() =>
                setOption({ ...option, background: item as BgName })
              }
            />
          </div>
        ))}
      </ChannelIconList>
    </Background>
  );
}

export default SelectBackground;
