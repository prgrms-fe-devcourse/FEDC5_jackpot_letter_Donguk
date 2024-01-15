import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAtomValue } from 'jotai';
import Button from '@/components/Common/Button';
import useGetChannelList from '@/hooks/api/useGetChannelList';
import { channelNameAtom } from '@/store/auth';
import { Channel } from '@/types/ResponseType';
import { channelOpenProps } from '../ChannelOpen';
import * as Style from './index.style';

function ChannelButton({
  channelName,
  channelId,
  channelDescription
}: channelOpenProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const userName = useAtomValue(channelNameAtom);

  const isMyChannel = userName === channelName;
  const { data: channelListData } = useGetChannelList();

  const handleClickShareButton = () => {
    const decodedPathname = decodeURI(location.pathname);
    const url = `http://localhost:3000${decodedPathname}`;
    navigator.clipboard.writeText(url);
    toast.success('링크가 복사되었습니다.');
  };

  const handleClickCreateChnnelButton = () => {
    const channelNames = channelListData.map(
      (channel: Channel) => channel.name
    );
    if (userName === '익명')
      return toast.error(
        '익명 사용자는 채널을 생성할 수 없습니다. 회원가입을 진행해주세요.'
      );
    if (channelNames.includes(userName))
      return toast.error('이미 채널을 생성했습니다.');
    navigate('/channel/new');
  };

  return (
    <Style.ChannelButton>
      {isMyChannel ? (
        <Button
          onClick={handleClickShareButton}
          content="링크 공유하기"
          size="xl"
        />
      ) : (
        <>
          <Button
            onClick={() =>
              navigate('/post/new', {
                state: { channelName, channelId, channelDescription }
              })
            }
            content="마음 전달하기"
            size="md"
            kind={'assistant'}
          />
          <Button
            onClick={handleClickCreateChnnelButton}
            content="나도 만들기"
            size="md"
          />
        </>
      )}
    </Style.ChannelButton>
  );
}

export default ChannelButton;
