import useNotifycations from '@/hooks/api/useNotifycations';
import { useUpdateNotification } from '@/hooks/api/useUpdateNotification';
import { Notification } from '@/types/ResponseType';
import AlarmItem from '../AlarmItem';
import { Header, NotificationContainer } from './index.style';

function AlarmList() {
  const { data } = useNotifycations();

  const { mutateUpdateNotification } = useUpdateNotification();

  const handleClickButton = () => {
    mutateUpdateNotification();
  };

  return (
    <NotificationContainer>
      <Header>
        <h1>내 활동</h1>
        <span onClick={handleClickButton}>모두 읽음</span>
      </Header>
      {data?.map((item: Notification, index: number) => (
        <div key={`alarm${index}`}>
          <AlarmItem info={item} />
        </div>
      ))}
    </NotificationContainer>
  );
}

export default AlarmList;
