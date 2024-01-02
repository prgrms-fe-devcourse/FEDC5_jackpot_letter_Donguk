import { Dispatch, SetStateAction } from 'react';
import { ChannelIconList, Title } from '@/pages/ChannelList/index.style.tsx';
import { ChannelOptionType } from '@/pages/ChannelTemplate';
import { selectedStyle } from '../SelectColor';
import { Background, Item } from './index.style';

interface Props {
  option: ChannelOptionType;
  setOption: Dispatch<SetStateAction<ChannelOptionType>>;
}
function SelectBackground({ option, setOption }: Props) {
  return (
    <Background selectedNumber={option.background}>
      <Title>
        <h1>
          <span>최익</span>님의 배경
        </h1>
        <span>내 채널의 배경을 선택해주세요</span>
      </Title>
      <ChannelIconList>
        {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => (
          <div key={`channel-background${index}`}>
            <Item
              css={option.background === index && selectedStyle}
              src={`src/assets/background/background${index}.png`}
              alt="background-img"
              onClick={() => setOption({ ...option, background: index })}
            />
          </div>
        ))}
      </ChannelIconList>
    </Background>
  );
}

export default SelectBackground;
