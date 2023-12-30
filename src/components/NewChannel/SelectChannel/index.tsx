import { channelSvg } from '@/components/Channel/ChannelSvg';
import { ChannelButton } from '@/components/Channel/OpenChannel/index.style';
import Button from '@/components/Common/Button';
import { ChannelIconList, Title } from '@/pages/ChannelList/index.style.tsx';
import styled from '@emotion/styled';
import { IconColor, IconColorType } from './type';

function SelectChannel() {
  return (
    <>
      <Title>
        <h1>
          <span>최익</span>님의 박
        </h1>
        <span>내 채널의 박을 선택해주세요</span>
      </Title>
      <ChannelIconList>
        {(Object.keys(IconColor) as Array<keyof IconColorType>).map(
          (color: keyof IconColorType) => (
            <Item>{channelSvg(IconColor[color])}</Item>
          )
        )}
      </ChannelIconList>
      <ChannelButton>
        <Button
          content="이전"
          onClick={() => console.log('Tes')}
          kind={'outlined'}
          size="sm"
        />
        <Button
          content="생성하기"
          onClick={() => console.log('Tes')}
          kind={'primary'}
          size="lg"
        />
      </ChannelButton>
    </>
  );
}

export default SelectChannel;

const Item = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 1rem;
  margin: 0.2rem;
  &:hover {
    width: calc(5.625rem - 15px);
    height: calc(5.625rem - 15px);
    border: 3px solid #0eb29a;
  }
`;
