import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAtomValue } from 'jotai';
import Button from '@/components/Common/Button';
import useGetChannelList from '@/hooks/api/useGetChannelList';
import { PATH } from '@/constants/path';
import { channelNameAtom } from '@/store/auth';
import { Channel } from '@/types/ResponseType';
import { isAnonymous, isInclude, isLogout } from '@/utils/access';
import { parsedDescription } from '@/utils/parse';
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

  const { allowWriteAll } = parsedDescription(channelDescription);

  const movePostPage = () => {
    navigate(PATH.POST_CREATE, {
      state: { channelName, channelId, channelDescription }
    });
  };

  const handleClickShareButton = () => {
    const decodedPathname = decodeURI(location.pathname);
    const url = `https://jackpot-letter-daebak.vercel.app${decodedPathname}`;
    navigator.clipboard.writeText(url);
    toast.success('링크가 복사되었습니다.');
  };

  const handleClickPost = () => {
    if (allowWriteAll) return movePostPage();
    let access = true;
    access = isLogout(userName, '가입한 회원만 작성가능한 채널이에요');
    access = isAnonymous(userName, '가입한 회원만 작성가능한 채널이에요');

    if (access) movePostPage();
  };

  const handleClickCreateChnnelButton = () => {
    let access = true;
    const channelNames = channelListData.map(
      (channel: Channel) => channel.name
    );
    access = isLogout(userName, '가입한 회원만 채널을 생성할 수 있어요');
    access = isInclude(channelNames, userName, '이미 채널을 생성했어요');
    access = isAnonymous(userName, '익명사용자는 채널을 생성할 수 없어요');

    if (access) navigate(PATH.CHANNEL_CREATE);
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
            onClick={handleClickPost}
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
