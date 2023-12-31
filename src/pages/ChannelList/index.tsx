import { Link } from 'react-router-dom';
import useChannelListQuery from '@/hooks/api/useChannelListQuery';
import ChannelImg from '@/assets/channelWithLongLine.svg';
import { Channel } from '@/types/ResponseType';
import ChannelIcon from '../../components/ChannelList/ChannelIcon';
import { ChannelIconList, Header, Title } from './index.style';

function ChannelList() {
  const { data: channelList } = useChannelListQuery();
  return (
    <>
      <Header>
        <Title>
          <h1>공개 박 구경하기</h1>
          <span>친구들의 박을 구경하고 메시지를 남겨봐요.</span>
        </Title>
        <img
          src={ChannelImg}
          alt="background-channel-icon"
        />
      </Header>
      <ChannelIconList>
        {channelList?.map((channel: Channel) => (
          <div
            key={`channel-${channel.name}`}
            role="button">
            <Link to={`/channel/${channel.name}`}>
              <ChannelIcon channel={channel} />
            </Link>
          </div>
        ))}
      </ChannelIconList>
    </>
  );
}

export default ChannelList;
