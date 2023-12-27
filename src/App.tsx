import { Global } from '@emotion/react';
import reset from './styles/reset';
import Modal from '@components/Common/Modal';
import useModal from './hooks/useModal';
import { Toaster } from 'react-hot-toast';
import { toast } from 'react-hot-toast';

function App() {
  const [visible, handleModalClick] = useModal();

  const toastStyle = {
    fontWeight: 600,
    padding: '0.75rem 1rem',
    marginTop: '0.5rem'
  };
  return (
    <>
      <Global styles={reset} />
      <button
        onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
          handleModalClick(e)
        }>
        모달클릭
      </button>
      <Modal
        children={
          <>
            <h1>하이</h1>
          </>
        }
        width={20}
        height={10}
        visible={visible}
        handleModalClose={(e: React.MouseEvent<HTMLDivElement>) =>
          handleModalClick(e)
        }
      />
      <h1 onClick={() => toast.success('성공했당')}>success case</h1>
      <h1 onClick={() => toast.error('실패했당')}>error case</h1>

      <Toaster
        toastOptions={{
          style: { ...toastStyle }
        }}
      />
    </>
  );
}

export default App;
