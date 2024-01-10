import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import New from '@/assets/New.svg';
import { Notification } from '@/types/ResponseType';
import * as Style from './index.style';

interface Prop {
  info: Notification;
}

interface AlarmType {
  en: 'Comment' | 'Message' | 'Follow' | 'Like';
  ko: string;
  onClick: () => void;
}

function AlarmItem({ info }: Prop) {
  const navigate = useNavigate();
  const { author, createdAt, comment, message, follow, like, seen, post } =
    info;
  const optionalVariables = [comment, message, follow, like];
  const optinalNumber = optionalVariables.findIndex(
    (variable) => variable !== undefined
  );

  const Type: { [key: number]: AlarmType } = {
    0: {
      en: 'Comment',
      ko: '댓글이 도착했어요',
      onClick: () => navigate(`/post/${post}`)
    },
    1: {
      en: 'Message',
      ko: '메시지가 도착했어요',
      onClick: () => navigate(`/message/${message}`)
    },
    2: {
      en: 'Follow',
      ko: '나를 팔로우하기 시작했어요',
      onClick: () => navigate(`/message/${message}`)
    },
    3: {
      en: 'Like',
      ko: '내 포스트를 좋아해요',
      onClick: () => navigate(`/post/${post}`)
    }
  };

  return (
    <Style.Notification onClick={Type[optinalNumber]?.onClick}>
      <Style.Content>
        <img src={`/src/assets/${Type[optinalNumber]?.en}.svg`} />
        <div>
          <div>{author.fullName}</div>
          <span>{Type[optinalNumber]?.ko}</span>
        </div>
      </Style.Content>
      <Style.Info seen={seen}>
        <div>{dayjs(createdAt).format('MM-DD')}</div>
        <img src={New} />
      </Style.Info>
    </Style.Notification>
  );
}

export default AlarmItem;
