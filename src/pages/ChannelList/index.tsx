import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '@/components/Common/SearchBar';
import useChannelListQuery from '@/hooks/api/useChannelListQuery';
import ChannelImg from '@/assets/channelWithLongLine.svg';
import { Channel } from '@/types/ResponseType';
import ChannelIcon from '../../components/ChannelList/ChannelIcon';
import { Body, ChannelIconList, Header, Title } from './index.style';

function ChannelList() {
  const { data: channelList } = useChannelListQuery();
  const [channels, setChannels] = useState<Channel[]>(channelList);

  useEffect(() => {
    setChannels(channelList);
  }, [channelList]);

  const handleChangeKeyword = (keyword: string) => {
    const filteredChannels = channelList?.filter((channel: Channel) =>
      channel.name.includes(keyword)
    );
    setChannels(filteredChannels);
  };

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
      <Body>
        <SearchBar
          placeholder="채널명을 검색해주세요."
          handleChangeKeyword={handleChangeKeyword}
        />
        <ChannelIconList>
          {channels &&
            [...channels].reverse().map((channel: Channel) => (
              <div
                key={`channel-${channel._id}`}
                role="button">
                <Link to={`/channel/${channel.name}`}>
                  <ChannelIcon channel={channel} />
                </Link>
              </div>
            ))}
        </ChannelIconList>
      </Body>
    </>
  );
}

export default ChannelList;
