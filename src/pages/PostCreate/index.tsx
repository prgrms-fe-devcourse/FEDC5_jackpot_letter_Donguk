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
import { Body } from './index.style';

export const selectedStyle = css`
  width: calc(6rem - 7px);
  height: calc(6rem - 7px);
  @media (max-width: 767px) {
    width: calc(3rem - 7px);
    height: calc(3rem - 7px);
  }
  border: 3px solid ${theme.palette.main};
`;

function PostCreate() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [color, setColor] = useState<ColorName>('red');

  return (
    <Body>
      <Title>
        <h1>
          <span>{state.channelName ?? '프룽'}</span>님에게
        </h1>
        <span>전달할 주머니 색상을 선택해주세요</span>
      </Title>
      <ChannelIconList>
        {Object.keys(ColorType).map((colorName) => (
          <Item
            size={'3rem'}
            role="button"
            key={`letter-color${colorName}`}
            src={`${import.meta.env.VITE_PUBLIC_URL}/letter/${colorName}.png`}
            css={colorName === color && selectedStyle}
            onClick={() => setColor(colorName as ColorName)}
            styleOption={{
              padding: '2rem'
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
              state: {
                color: color,
                channelName: state.channelName,
                channelDescription: state.channelDescription
              }
            })
          }
        />
      </ChannelButton>
    </Body>
  );
}

export default PostCreate;
