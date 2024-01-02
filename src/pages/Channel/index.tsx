import { useState } from 'react';
import ChannelAnimation from '@/components/Channel/ChannelAnimation';
import ChannelClose from '@/components/Channel/ChannelClose';
import ChannelOpen from '@/components/Channel/ChannelOpen';
import { Title } from '../ChannelList/index.style';

function Channel() {
  const [isOpened, setIsOpened] = useState(false);

  const handleIconClick = (): void => {
    setIsOpened(true);
  };

  return (
    <>
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
    </>
  );
}

export default Channel;
