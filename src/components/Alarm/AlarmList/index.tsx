import { useCheckNotifications } from '@/hooks/api/useCheckNotifications';
import useGetNotifications from '@/hooks/api/useGetNotifications';
import { Notification } from '@/types/ResponseType';
import AlarmItem from '../AlarmItem';
import { Header, NotificationContainer } from './index.style';

function AlarmList() {
  const { data } = useGetNotifications();

  const { mutate } = useCheckNotifications();

  const handleClickButton = () => {
    mutate();
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
