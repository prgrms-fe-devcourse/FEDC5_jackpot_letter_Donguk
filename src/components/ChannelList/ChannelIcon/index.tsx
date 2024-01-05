import { IconColor } from '@/components/ChannelTemplate/SelectColor/type';
import CustomChannelIcon from '@/components/Common/CustomChannelIcon';
import { Channel } from '@/types/ResponseType';
import { ChannelIconContainer } from './index.style';

interface Prop {
  channel: Channel;
}

function ChannelIcon({ channel }: Prop) {
  const { name } = channel;
  return (
    <ChannelIconContainer>
      <CustomChannelIcon color={IconColor.red} />
      <span>{name}</span>
    </ChannelIconContainer>
  );
}

export default ChannelIcon;
