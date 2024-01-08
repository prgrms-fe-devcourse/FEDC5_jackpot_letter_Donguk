import { useAtomValue } from 'jotai';
import { Item } from '@/components/ChannelTemplate/SelectBackground/index.style';
import {
  ColorName,
  ColorType
} from '@/components/ChannelTemplate/SelectColor/type';
import CustomChannelIcon from '@/components/Common/CustomChannelIcon';
import { channelNameAtom } from '@/store/auth';
import { ChannelIconList, Title } from '../ChannelList/index.style';

function PostCreate() {
  const channelName = useAtomValue(channelNameAtom);

  return (
    <>
      <Title>
        <h1>
          <span>{channelName}</span>님께 보내는 주머니
        </h1>
        <span>주머니 색상을 선택해주세요</span>
      </Title>
      <ChannelIconList>
        {Object.keys(ColorType).map((color) => (
          <Item
            role="button"
            key={`channel-color${color}`}
            // css={option.color === color && selectedStyle}
            // onClick={() => setOption({ ...option, color: color as ColorName })}
          >
            <img />
          </Item>
        ))}
      </ChannelIconList>
    </>
  );
}

export default PostCreate;
