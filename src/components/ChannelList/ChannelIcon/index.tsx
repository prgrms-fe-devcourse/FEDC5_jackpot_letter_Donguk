import ChannelImg from '@/assets/channel.svg';
import { ChannelIconContainer } from './index.style';

function ChannelIcon() {
  return (
    <ChannelIconContainer>
      <img
        src={ChannelImg}
        alt="channel-button"
      />
      <span>세인</span>
    </ChannelIconContainer>
  );
}

export default ChannelIcon;
