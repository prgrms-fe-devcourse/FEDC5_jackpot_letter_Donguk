import ChannelIconImg from '../../../assets/channelIcon.svg';
import { ChannelIconContainer } from './index.style';

function ChannelIcon() {
  return (
    <ChannelIconContainer>
      <img
        src={ChannelIconImg}
        alt="ChannelIcon"
      />
      <span>세인</span>
    </ChannelIconContainer>
  );
}

export default ChannelIcon;
