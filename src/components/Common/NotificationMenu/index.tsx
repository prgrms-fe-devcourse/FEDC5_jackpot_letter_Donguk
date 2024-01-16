import { useState } from 'react';
import { IoNotificationsOutline } from 'react-icons/io5';
import { useAtomValue } from 'jotai';
import AlarmList from '@/components/Alarm/AlarmList';
import useModal from '@/hooks/useModal';
import { darkAtom } from '@/store/theme';
import { theme } from '@/theme';
import Modal from '../Modal';
import { Button } from './index.style';

function NotificationMenu() {
  const [visible, handleModalClick] = useModal();

  const darkMode = useAtomValue(darkAtom);

  const handleClickButton = (e: React.MouseEvent<HTMLElement>) => {
    handleModalClick(e);
  };

  return (
    <>
      <Button
        role="button"
        onClick={handleClickButton}>
        <IoNotificationsOutline
          size={28}
          color={darkMode ? theme.palette.sub : theme.palette.dark}
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
