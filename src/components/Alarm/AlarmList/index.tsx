import useNotifycations from '@/hooks/api/useNotifycations';
import { Notification } from '@/types/ResponseType';
import AlarmItem from '../AlarmItem';
import { NotificationContainer } from './index.style';

function AlarmList() {
  const { data } = useNotifycations();
  return (
    <NotificationContainer>
      {data?.map((item: Notification, index: number) => (
        <div key={`alarm${index}`}>
          <AlarmItem info={item} />
        </div>
      ))}
    </NotificationContainer>
  );
}

export default AlarmList;
