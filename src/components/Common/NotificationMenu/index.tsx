import { IoNotificationsOutline } from 'react-icons/io5';
import { useAtomValue } from 'jotai';
import AlarmList from '@/components/Alarm/AlarmList';
import useGetNotifications from '@/hooks/api/useGetNotifications';
import useModal from '@/hooks/useModal';
import New from '@/assets/New.svg';
import { darkAtom } from '@/store/theme';
import { theme } from '@/theme';
import { Notification } from '@/types/ResponseType';
import Modal from '../Modal';
import { Button } from './index.style';

function NotificationMenu() {
  const [visible, handleModalClick] = useModal();
  const darkMode = useAtomValue(darkAtom);
  const { data } = useGetNotifications();

  const handleClickButton = (e: React.MouseEvent<HTMLElement>) => {
    handleModalClick(e);
  };

  const checkUnreadNotification = () => {
    const filteredNotification = data?.filter(
      (notification: Notification) => notification.seen === false
    );
    return filteredNotification.length > 0;
  };

  return (
    <>
      <Button
        isUnread={checkUnreadNotification()}
        role="button"
        onClick={handleClickButton}>
        <IoNotificationsOutline
          size={28}
          color={darkMode ? theme.palette.sub : theme.palette.dark}
        />
        <img
          src={New}
          alt="unread notification"
        />
      </Button>
      {visible && (
        <Modal
          width={20}
          height={25}
          visible={visible}
          handleModalClose={(e: React.MouseEvent<HTMLDivElement>) =>
            handleModalClick(e)
          }
          type={'center'}>
          <AlarmList />
        </Modal>
      )}
    </>
  );
}

export default NotificationMenu;
