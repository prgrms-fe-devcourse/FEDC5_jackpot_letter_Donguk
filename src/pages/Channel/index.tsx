import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import AlarmList from '@/components/Alarm/AlarmList';
import ChannelAnimation from '@/components/Channel/ChannelAnimation';
import ChannelClose from '@/components/Channel/ChannelClose';
import ChannelOpen from '@/components/Channel/ChannelOpen';
import { Background } from '@/components/ChannelTemplate/SelectBackground/index.style';
import Modal from '@/components/Common/Modal';
import useChannelQuery from '@/hooks/api/useChannelQuery';
import useModal from '@/hooks/useModal';
import Alarm from '@/assets/Alarm.svg';
import { parsedBackground } from '@/utils/parse';
import { Title } from '../ChannelList/index.style';

function Channel() {
  const [data, setData] = useState({
    name: '프룽',
    posts: [],
    description: ''
  });
  const [visible, handleModalClick] = useModal();

  const [isOpened, setIsOpened] = useState(false);
  const { channelName } = useParams();
  const { data: channelInfo } = useChannelQuery(channelName ?? '');

  useEffect(() => {
    if (channelInfo) setData(channelInfo);
    console.log(channelInfo);
  }, [channelInfo]);

  if (channelName === undefined) {
    return <Navigate to="/" />;
  }
  const handleIconClick = (): void => {
    setIsOpened(true);
  };

  return (
    <Background
      selectedValue={data.description && parsedBackground(data.description)}>
      <Title>
        <h1>
          <span>{data.name}</span>님의 박
        </h1>
        <span>{data.posts.length}개의 주머니가 도착했어요</span>
      </Title>
      <img
        src={Alarm}
        alt="alarm-button"
        role="button"
        onClick={(e: React.MouseEvent<HTMLElement>) => handleModalClick(e)}
      />
      {isOpened ? (
        <>
          <ChannelAnimation />
          <ChannelOpen
            channelId={channelInfo?._id}
            channelName={channelName}
          />
        </>
      ) : (
        <ChannelClose handleIconClick={handleIconClick} />
      )}
      <Modal
        width={20}
        height={25}
        visible={visible}
        handleModalClose={(e: React.MouseEvent<HTMLDivElement>) =>
          handleModalClick(e)
        }
        type={'center'}>
        <AlarmList />
      </Modal>
    </Background>
  );
}

export default Channel;
