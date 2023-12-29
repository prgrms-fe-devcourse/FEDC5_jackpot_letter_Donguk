import ChannelImg from '@/assets/channelTotal.svg';
import PointerImg from '@/assets/pointer.svg';
import { AnnounceBox, ChannelIcon, Pointer } from './index.style';

type CloseChannelProps = {
  handleIconClick: () => void;
};
function CloseChannel({ handleIconClick }: CloseChannelProps) {
  return (
    <>
      <ChannelIcon
        role="button"
        onClick={handleIconClick}
        src={ChannelImg}
        alt="channel-img"
      />
      <Pointer
        src={PointerImg}
        alt="pointer-img"
      />
      <AnnounceBox>박을 터트려주세요</AnnounceBox>
    </>
  );
}

export default CloseChannel;
