import CustomChannelIcon from '@/components/Common/CustomChannelIcon';
import { ChannelIconList, Title } from '@/pages/ChannelList/index.style.tsx';
import { Item } from './index.style';
import { IconColor, IconColorType } from './type';

function SelectColor() {
  return (
    <>
      <Title>
        <h1>
          <span>최익</span>님의 박
        </h1>
        <span>내 채널의 박을 선택해주세요</span>
      </Title>
      <ChannelIconList>
        {(Object.keys(IconColor) as Array<keyof IconColorType>).map(
          (color: keyof IconColorType) => (
            <Item>
              <CustomChannelIcon color={IconColor[color]} />
            </Item>
          )
        )}
      </ChannelIconList>
    </>
  );
}

export default SelectColor;
