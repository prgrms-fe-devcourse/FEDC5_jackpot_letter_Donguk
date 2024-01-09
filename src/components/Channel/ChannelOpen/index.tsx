import { useNavigate, useParams } from 'react-router-dom';
import Button from '@/components/Common/Button';
import OpenChannel from '@/components/Common/CustomChannelIcon/OpenChannel';
import useChannelQuery from '@/hooks/api/useChannelQuery';
import { parsedColor } from '@/utils/parse';
import { ChannelButton, OpenIcon } from './index.style';

function ChannelOpen({ channelId }: Record<string, string>) {
  const navigate = useNavigate();
  const { channelId } = useParams();
  const { data: channelInfo } = useChannelQuery(channelId ?? '');
  const channelColor = parsedColor(channelInfo?.description);
  return (
    <>
      <OpenIcon>
        <OpenChannel color={channelColor} />
      </OpenIcon>
      {/* post 위치 */}
      <ChannelButton>
        <Button
          onClick={() =>
            navigate('/post/new', { state: { name: channelInfo.name } })
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
    </>
  );
}

export default ChannelOpen;
