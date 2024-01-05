import { useParams } from 'react-router-dom';
import {
  ColorName,
  ColorType
} from '@/components/ChannelTemplate/SelectColor/type';
import CustomChannelIcon from '@/components/Common/CustomChannelIcon';
import useChannelQuery from '@/hooks/api/useChannelQuery';
import PointerImg from '@/assets/Pointer.svg';
import { parsedColor } from '@/utils/parse';
import { AnnounceBox, ChannelIcon, Pointer } from './index.style';

type Props = {
  handleIconClick: () => void;
};

function ChannelClose({ handleIconClick }: Props) {
  const { channelId } = useParams();
  const { data: channelInfo } = useChannelQuery(channelId ?? '');
  const channelColor = parsedColor(channelInfo?.description);
  return (
    <>
      <ChannelIcon
        role="button"
        onClick={handleIconClick}>
        <CustomChannelIcon
          color={channelColor}
          size={240}
          tail={true}
        />
      </ChannelIcon>
      <Pointer
        src={PointerImg}
        alt="pointer-image"
      />
      <AnnounceBox>박을 터트려주세요</AnnounceBox>
    </>
  );
}

export default ChannelClose;
