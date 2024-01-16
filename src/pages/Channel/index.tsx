import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import ChannelAnimation from '@/components/Channel/ChannelAnimation';
import ChannelClose from '@/components/Channel/ChannelClose';
import ChannelOpen from '@/components/Channel/ChannelOpen';
import ChannelOption from '@/components/Channel/ChannelOption';
import { Background } from '@/components/ChannelTemplate/SelectBackground/index.style';
import {
  BgName,
  BgType
} from '@/components/ChannelTemplate/SelectBackground/type';
import useGetChannelInfo from '@/hooks/api/useGetChannelInfo';
import useTheme from '@/hooks/useTheme';
import { parsedBackground } from '@/utils/parse';
import { Title } from '../ChannelList/index.style';

function Channel() {
  const { channelName } = useParams() as { channelName: string };
  const { data } = useGetChannelInfo(channelName);
  const { darkMode, toggleTheme } = useTheme();
  const [mode, setmode] = useState<boolean>(false);
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    const background: BgName = parsedBackground(data?.description);
    if ((BgType[background] === 'dark') !== darkMode) {
      toggleTheme();
      setmode(true);
    }
    return () => {
      if (mode) {
        toggleTheme();
      }
    };
  }, [darkMode, mode, toggleTheme]);

  if (channelName === undefined) {
    return <Navigate to="/" />;
  }

  const handleIconClick = (): void => {
    setIsOpened(true);
  };

  return (
    <Background
      selectedValue={
        data?.description &&
        parsedBackground(data?.description as unknown as string)
      }>
      <Title>
        <h1>
          <span>{data?.name}</span>님의 박
        </h1>
        <span>{data?.posts.length}개의 주머니가 도착했어요</span>
        <ChannelOption description={data?.description} />
      </Title>
      {isOpened ? (
        <>
          <ChannelAnimation />
          <ChannelOpen
            channelId={data?._id}
            channelName={channelName}
            channelDescription={data.description}
          />
        </>
      ) : (
        <ChannelClose handleIconClick={handleIconClick} />
      )}
    </Background>
  );
}

export default Channel;
