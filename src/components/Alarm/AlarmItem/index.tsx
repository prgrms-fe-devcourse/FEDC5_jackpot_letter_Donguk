import dayjs from 'dayjs';
import { Notification } from '@/types/ResponseType';
import * as Style from './index.style';

interface Prop {
  info: Notification;
}
const Type: { [key: number]: string } = {
  0: 'Comment',
  1: 'Message',
  2: 'Follow',
  3: 'Like'
};

function AlarmItem({ info }: Prop) {
  const { author, createdAt, comment, message, follow, like } = info;
  const optionalVariables = [comment, message, follow, like];
  const optinalNumber = optionalVariables.findIndex(
    (variable) => variable !== undefined
  );
  return (
    <Style.Notification>
      <Style.Content>
        <img src={`/src/assets/${Type[optinalNumber]}.svg`} />
        <div>
          <div>{author.fullName}</div>
          <span>{Type[optinalNumber]}가 도착했어요.</span>
        </div>
      </Style.Content>
      <Style.Time>{dayjs(createdAt).format('MM-DD')}</Style.Time>
    </Style.Notification>
  );
}

export default AlarmItem;
