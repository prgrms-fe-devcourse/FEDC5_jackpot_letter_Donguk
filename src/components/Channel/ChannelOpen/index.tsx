import ChannelPosts from '@/components/Channel/ChannelPosts';
import OpenChannel from '@/components/Common/CustomChannelIcon/OpenChannel';
import useChannelPostsQuery from '@/hooks/api/useChannelPostsQuery';
import useChannelQuery from '@/hooks/api/useChannelQuery';
import { parsedColor } from '@/utils/parse';
import ChannelButton from '../ChannelButton';
import { Body, OpenIcon } from './index.style';

export interface channelOpenProps {
  channelId: string;
  channelName: string;
}

function ChannelOpen({ channelName, channelId }: channelOpenProps) {
  const { data: channelInfo } = useChannelQuery(channelName ?? '');
  const { data: postList } = useChannelPostsQuery(channelInfo?._id ?? '');
  const channelColor = parsedColor(channelInfo?.description);
  return (
    <Body>
      <OpenIcon>
        <OpenChannel color={channelColor} />
      </OpenIcon>
      <ChannelPosts posts={postList} />
      <ChannelButton
        channelId={channelId}
        channelName={channelName}
      />
    </Body>
  );
}

export default ChannelOpen;
