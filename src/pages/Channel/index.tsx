import { useState } from 'react';
import ChannelAnimation from '@/components/Channel/ChannelAnimation';
import ChannelClose from '@/components/Channel/ChannelClose';
import ChannelOpen from '@/components/Channel/ChannelOpen';
import { Background } from '@/components/ChannelTemplate/SelectBackground/index.style';
import useChannelQuery from '@/hooks/api/useChannelQuery';
import { parsedBackground } from '@/utils/parse';
import { Title } from '../ChannelList/index.style';

function Channel() {
  const [data, setData] = useState({
    name: '프룽',
    posts: [],
    description: ''
  });
  const [isOpened, setIsOpened] = useState(false);
  const { channelId } = useParams();
  const { data: channelInfo } = useChannelQuery(channelId ?? '');

  useEffect(() => {
    if (channelInfo) setData(channelInfo);
  }, [channelInfo]);

  if (channelId === undefined) {
    return <Navigate to="/" />;
  }
  console.log(data);
  const handleIconClick = (): void => {
    setIsOpened(true);
  };

  return (
    <Background
      selectedNumber={data.description && parsedBackground(data.description)}>
      <Title>
        <h1>
          <span>유경</span>님의 박
        </h1>
        <span>30개의 주머니가 도착했어요</span>
      </Title>
      {isOpened ? (
        <>
          <ChannelAnimation />
          <ChannelOpen />
        </>
      ) : (
        <ChannelClose handleIconClick={handleIconClick} />
      )}
    </Background>
  );
}

export default Channel;
