import ChannelPosts from '@/components/Channel/ChannelPosts';
import OpenChannel from '@/components/Common/CustomChannelIcon/OpenChannel';
import useGetChannelInfo from '@/hooks/api/useGetChannelInfo';
import useGetChannelPosts from '@/hooks/api/useGetChannelPosts';
import { parsedColor } from '@/utils/parse';
import ChannelButton from '../ChannelButton';
import { Body, OpenIcon } from './index.style';

export interface channelOpenProps {
  channelId: string;
  channelName: string;
  channelDescription: string;
}

function ChannelOpen({
  channelId,
  channelName,
  channelDescription
}: channelOpenProps) {
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
        channelId={channelId}
        channelName={channelName}
      </ChannelButton>
    </Body>
  );
}

export default ChannelOpen;
