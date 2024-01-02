import { useState } from 'react';
import { ChannelIconList, Title } from '@/pages/ChannelList/index.style.tsx';
import { Background, Item } from './index.style';

function SelectBackground() {
  const [selectedNumber, setSelectedNumber] = useState<number>(0);
  return (
    <Background selectedNumber={selectedNumber}>
      <Title>
        <h1>
          <span>최익</span>님의 배경
        </h1>
        <span>내 채널의 배경을 선택해주세요</span>
      </Title>
      <ChannelIconList>
        {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => (
          <div
            key={`button${index}`}
            onClick={() => setSelectedNumber(index)}
          >
            <Item
              src={`src/assets/background/background${index}.png`}
              alt="background-img"
            />
          </div>
        ))}
      </ChannelIconList>
    </Background>
  );
}

export default SelectBackground;
