import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import New from '@/assets/New.svg';
import { Notification } from '@/types/ResponseType';
import * as Style from './index.style';
import { Type } from './type';

interface Prop {
  info: Notification;
}

function AlarmItem({ info }: Prop) {
  const navigate = useNavigate();
  const { author, createdAt, comment, message, follow, like, seen, post } =
    info;
  const optionalVariables = [comment, message, follow, like, post];
  const optinalNumber = optionalVariables.findIndex(
    (variable) => variable !== undefined
  );
  if (optinalNumber === 4) return;

  const { url_path, url_id, type, annouce } = Type[optinalNumber];

  const handleClickItem = () => {
    navigate(`/${url_path}/${optionalVariables[url_id]}`);
  };

  return (
    <Style.Notification onClick={handleClickItem}>
      <Style.Content>
        <img src={`/src/assets/${type}.svg`} />
        <div>
          <div>{author.fullName}</div>
          <span>{annouce}</span>
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
