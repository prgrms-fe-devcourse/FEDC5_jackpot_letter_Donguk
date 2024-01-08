import { useState } from 'react';
import { useAtomValue } from 'jotai';
import { Item } from '@/components/ChannelTemplate/SelectBackground/index.style';
import {
  ColorName,
  ColorType
} from '@/components/ChannelTemplate/SelectColor/type';
import { channelNameAtom } from '@/store/auth';
import { theme } from '@/theme';
import { css } from '@emotion/react';
import { ChannelIconList, Title } from '../ChannelList/index.style';

export const selectedStyle = css`
  width: calc(4.325rem - 7px);
  height: calc(4.325rem - 7px);
  border: 3px solid ${theme.palette.main};
`;
function PostCreate() {
  const channelName = useAtomValue(channelNameAtom);
  const [color, setColor] = useState<ColorName>('red');
  return (
    <>
      <Title>
        <h1>
          <span>{channelName}</span>님께 보내는 주머니
        </h1>
        <span>주머니 색상을 선택해주세요</span>
      </Title>
      <ChannelIconList>
        {Object.keys(ColorType).map((colorName) => (
          <Item
            role="button"
            key={`letter-color${colorName}`}
            src={`/src/assets/letter/${colorName}.png`}
            css={colorName === color && selectedStyle}
            onClick={() => setColor(colorName as ColorName)}
            styleOption={{
              padding: '1rem',
              width: '4.325rem',
              height: '4.325rem'
            }}
          />
        ))}
      </ChannelIconList>
    </>
  );
}

export default PostCreate;
