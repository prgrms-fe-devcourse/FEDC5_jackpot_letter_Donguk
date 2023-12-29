import { useState } from 'react';
import CloseChannel from '@/components/Channel/CloseChannel';
import CoverAnimation from '@/components/Channel/CoverAnimation';
import OpenChannel from '@/components/Channel/OpenChannel';
import { Title } from '../ChannelList/index.style';

function Channel() {
  const [isCoverAnimationVisible, setIsCoverAnimationVisible] = useState(false);
  const handleIconClick = (): void => {
    setIsCoverAnimationVisible(true);
  };
  return (
    <>
      <Title>
        <h1>
          <span>유경</span>님의 박
        </h1>
        <span>30개의 주머니가 도착했어요</span>
      </Title>
      {isCoverAnimationVisible ? (
        <>
          <CoverAnimation />
          <OpenChannel />
        </>
      ) : (
        <CloseChannel handleIconClick={handleIconClick} />
      )}
    </>
  );
}

export default Channel;
