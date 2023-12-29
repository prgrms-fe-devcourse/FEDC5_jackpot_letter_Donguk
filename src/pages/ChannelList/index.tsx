import channelLongImg from '@/assets/longChannel.svg';
import ChannelIcon from '../../components/ChannelList/ChannelIcon';
import { ChannelIconList, Header, Title } from './index.style';

function ChannelList() {
  return (
    <>
      <Header>
        <Title>
          <h1>공개 박 구경하기</h1>
          <span>친구들의 박을 구경하고 메시지를 남겨봐요.</span>
        </Title>
        <img
          src={channelLongImg}
          alt="background-channel-img"
        />
      </Header>
      <ChannelIconList>
        {[1, 2, 3, 4, 5].map((index) => (
          <div key={`button${index}`}>
            <ChannelIcon />
          </div>
        ))}
      </ChannelIconList>
    </>
  );
}

export default ChannelList;
