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
import { parsedBackground, parsedDescription } from '@/utils/parse';
import { Title } from '../ChannelList/index.style';

function Channel() {
  const [data, setData] = useState({
    name: '프룽',
    posts: [],
    description: '' || {
      allowViewAll: true,
      allowWriteAll: true,
      background: 'mountain2',
      color: 'red'
    }
  });
  const { channelName } = useParams();
  const { data: channelInfo } = useGetChannelInfo(channelName ?? '');
  const { darkMode, toggleTheme } = useTheme();
  const [mode, setmode] = useState<boolean>(false);
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    if (channelInfo) setData(channelInfo);
    const background: BgName = parsedBackground(channelInfo?.description);
    if ((BgType[background] === 'dark') !== darkMode) {
      toggleTheme();
      setmode(true);
    }
    const parsedOption = parsedDescription(channelInfo?.description);
    setData({ ...data, description: parsedOption });
    console.log(data.description);
    return () => {
      if (mode) {
        toggleTheme();
      }
    };
  }, [channelInfo, darkMode, mode, toggleTheme]);

  if (channelName === undefined) {
    return <Navigate to="/" />;
  }

  const handleIconClick = (): void => {
    setIsOpened(true);
  };
  const { description, name, posts } = data;
  return (
    <Background
      selectedValue={
        description && parsedBackground(description as unknown as string)
      }>
      <Title>
        <h1>
          <span>{name}</span>님의 박
        </h1>
        <span>{posts.length}개의 주머니가 도착했어요</span>
        <ChannelOption description={description} />
      </Title>

      {isOpened ? (
        <>
          <ChannelAnimation />
          <ChannelOpen
            channelId={channelInfo?._id}
            channelName={channelName}
            channelDescription={channelInfo.description}
          />
        </>
      ) : (
        <ChannelClose handleIconClick={handleIconClick} />
      )}
    </Background>
  );
}

export default Channel;
