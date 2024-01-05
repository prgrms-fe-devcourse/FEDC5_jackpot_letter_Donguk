import CustomChannelIcon from '@/components/Common/CustomChannelIcon';
import { Channel } from '@/types/ResponseType';
import { parsedColor } from '@/utils/parse';
import { ChannelIconContainer } from './index.style';

interface Prop {
  channel: Channel;
}

function ChannelIcon({ channel }: Prop) {
  const { name, description } = channel;
  return (
    <ChannelIconContainer>
      <CustomChannelIcon color={parsedColor(description)} />
      <span>{name}</span>
    </ChannelIconContainer>
  );
}

export default ChannelIcon;
