import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAtomValue } from 'jotai';
import Button from '@/components/Common/Button';
import { channelNameAtom } from '@/store/auth';
import { channelOpenProps } from '../ChannelOpen';
import * as Style from './index.style';

function ChannelButton({ channelName, channelId }: channelOpenProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const userName = useAtomValue(channelNameAtom);

  const isMyChannel = userName === channelName;

  const handleClickShareButton = () => {
    const decodedPathname = decodeURI(location.pathname);
    const url = `http://localhost:3000${decodedPathname}`;
    navigator.clipboard.writeText(url);
    toast.success('링크가 복사되었습니다.');
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
                state: { channelName, channelId }
              })
            }
            content="마음 전달하기"
            size="md"
            kind={'assistant'}
          />
          <Button
            onClick={() => navigate('/channel/new')}
            content="나도 만들기"
            size="md"
          />
        </>
      )}
    </Style.ChannelButton>
  );
}

export default ChannelButton;
