import { useState } from 'react';
import { ChannelButton } from '@/components/Channel/OpenChannel/index.style';
import Button from '@/components/Common/Button';
import { ChannelIconList, Title } from '@/pages/ChannelList/index.style.tsx';
import styled from '@emotion/styled';

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
      <ChannelButton>
        <Button
          content="이전"
          onClick={() => console.log('Tes')}
          kind={'outlined'}
          size="sm"
        />
        <Button
          content="박 고르기"
          onClick={() => console.log('Tes')}
          kind={'primary'}
          size="lg"
        />
      </ChannelButton>
    </Background>
  );
}

export default SelectBackground;

const Background = styled.div<{ selectedNumber: number }>`
  width: 100vw;
  height: 100vh;
  background-image: ${({ selectedNumber }) =>
    `url("src/assets/background/background${selectedNumber}.png")`};
`;

const Item = styled.img`
  margin: 0.5rem;
  background-color: black;
  width: 5.625rem;
  height: 5.625rem;
  border-radius: 10px;
  &:hover {
    width: calc(5.625rem - 15px);
    height: calc(5.625rem - 15px);
    border: 3px solid #0eb29a;
  }
`;
