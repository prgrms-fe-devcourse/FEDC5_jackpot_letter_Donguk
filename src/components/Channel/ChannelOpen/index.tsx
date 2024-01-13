import { useNavigate } from 'react-router-dom';
import ChannelPosts from '@/components/Channel/ChannelPosts';
import Button from '@/components/Common/Button';
import OpenChannel from '@/components/Common/CustomChannelIcon/OpenChannel';
import useChannelPostsQuery from '@/hooks/api/useChannelPostsQuery';
import useChannelQuery from '@/hooks/api/useChannelQuery';
import { parsedColor } from '@/utils/parse';
import { Body, ChannelButton, OpenIcon } from './index.style';

interface channelOpenProps {
  channelId: string;
  channelName: string;
}

function ChannelOpen({ channelId, channelName }: channelOpenProps) {
  const navigate = useNavigate();
  const { data: channelInfo } = useChannelQuery(channelName ?? '');
  const { data: postList } = useChannelPostsQuery(channelInfo?._id ?? '');
  const channelColor = parsedColor(channelInfo?.description);

  return (
    <Body>
      <OpenIcon>
        <OpenChannel color={channelColor} />
      </OpenIcon>
      <ChannelPosts
        posts={postList}
        channelName={channelInfo.name}
        channelId={channelId}
      />
      <ChannelButton>
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
      </ChannelButton>
    </Body>
  );
}

export default ChannelOpen;
