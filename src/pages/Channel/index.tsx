import ChannelImg from '@/assets/channelTotal.svg';
import styled from '@emotion/styled';
import { Title } from '../ChannelList/index.style';

function Channel() {
  return (
    <>
      <Title>
        <h1>
          <span>유경</span>님의 박
        </h1>
        <span>30개의 주머니가 도착했어요</span>
      </Title>
      <ChannelIcon
        src={ChannelImg}
        alt="channel-img"
      />
    </>
  );
}

export default Channel;
const ChannelIcon = styled.img`
  position: absolute;
  top: 0px;
  left: calc(50vh - 16rem);
`;
