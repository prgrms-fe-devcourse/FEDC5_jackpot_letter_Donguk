import { useState } from 'react';
import AlarmList from '@/components/Alarm/AlarmList';
import useModal from '@/hooks/useModal';
import Alarm from '@/assets/Alarm.svg';
import Modal from '../Modal';
import { Button } from './index.style';

function NotificationMenu() {
  const [toggle, setToggle] = useState(false);
  const [visible, handleModalClick] = useModal();

  const handleClickButton = (e: React.MouseEvent<HTMLElement>) => {
    setToggle(!toggle);
    handleModalClick(e);
  };
  return (
    <>
      <Button
        onClick={handleClickButton}
        src={Alarm}
        alt="alarm-button"
        role="button"
      />
      {toggle && (
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
