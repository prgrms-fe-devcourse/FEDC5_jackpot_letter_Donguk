import ChannelImg from '@/assets/ChannelWithLine.svg';
import PointerImg from '@/assets/Pointer.svg';
import { AnnounceBox, ChannelIcon, Pointer } from './index.style';

type Props = {
  handleIconClick: () => void;
};

function ChannelClose({ handleIconClick }: Props) {
  return (
    <>
      <ChannelIcon
        role="button"
        onClick={handleIconClick}
        src={ChannelImg}
        alt="view-post-button"
      />
      <Pointer
        src={PointerImg}
        alt="pointer-image"
      />
      <AnnounceBox>박을 터트려주세요</AnnounceBox>
    </>
  );
}

export default ChannelClose;
