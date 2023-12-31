import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Item } from '@/components/ChannelTemplate/SelectBackground/index.style';
import {
  ColorName,
  ColorType
} from '@/components/ChannelTemplate/SelectColor/type';
import Button from '@/components/Common/Button';
import { theme } from '@/theme';
import { css } from '@emotion/react';
import { ChannelIconList, Title } from '../ChannelList/index.style';
import { ChannelButton } from '../ChannelTemplate/index.style';

export const selectedStyle = css`
  width: calc(4.325rem - 7px);
  height: calc(4.325rem - 7px);
  border: 3px solid ${theme.palette.main};
`;
function PostCreate() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [color, setColor] = useState<ColorName>('red');

  return (
    <>
      <Title>
        <h1>
          <span>{state.channelName ?? '프룽'}</span>님께 보내는 주머니
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
      <ChannelButton>
        <Button
          content="취소"
          kind={'outlined'}
          size={'sm'}
          onClick={() => navigate(-1)}
        />
        <Button
          content={'다음'}
          kind={'primary'}
          size="lg"
          onClick={() =>
            navigate(`/post/${state.channelId}`, {
              state: { color: color, channelName: state.channelName }
            })
          }
        />
      </ChannelButton>
    </>
  );
}

export default PostCreate;
