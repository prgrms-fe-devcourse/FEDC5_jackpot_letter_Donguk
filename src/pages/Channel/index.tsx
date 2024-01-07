import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import ChannelAnimation from '@/components/Channel/ChannelAnimation';
import ChannelClose from '@/components/Channel/ChannelClose';
import ChannelOpen from '@/components/Channel/ChannelOpen';
import useChannelQuery from '@/hooks/api/useChannelQuery';
import { Title } from '../ChannelList/index.style';

function Channel() {
  const [data, setData] = useState({ name: '프룽', posts: [] });
  const [isOpened, setIsOpened] = useState(false);
  const { channelId } = useParams();
  const { data: channelInfo } = useChannelQuery(channelId ?? '');

  useEffect(() => {
    if (channelInfo) setData(channelInfo);
  }, [channelInfo]);

  if (channelId === undefined) {
    return <Navigate to="/" />;
  }

  const handleIconClick = (): void => {
    setIsOpened(true);
  };

  return (
    <>
      <Title>
        <h1>
          <span>{data.name}</span>님의 박
        </h1>
        <span>{data.posts.length}개의 주머니가 도착했어요</span>
      </Title>
      {isOpened ? (
        <>
          <ChannelAnimation />
          <ChannelOpen channelId={channelId} />
        </>
      ) : (
        <ChannelClose handleIconClick={handleIconClick} />
      )}
    </>
  );
}

export default Channel;
