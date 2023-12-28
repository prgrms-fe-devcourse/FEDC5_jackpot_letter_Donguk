import { Global } from '@emotion/react';
import reset from './styles/reset';
import Modal from '@components/Common/Modal';
import useModal from './hooks/useModal';
import { Toaster } from 'react-hot-toast';
import { toast } from 'react-hot-toast';

function App() {
  const [visible, handleModalClick, top, left] = useModal();

  const toastStyle = {
    fontWeight: 600,
    padding: '0.75rem 1rem',
    marginTop: '0.5rem'
  };

  return (
    <>
      <Global styles={reset} />
      <button
        style={{ float: 'right' }}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          handleModalClick(e);
        }}>
        해당요소 아래에 생기는 모달클릭
      </button>
      <Modal
        type="relative"
        top={top}
        left={left}
        radius={0}
        marginTop={1}
        children={
          <>
            <h1>해당요소 아래에 생기는 모달내용</h1>
          </>
        }
        width={10}
        height={15}
        visible={visible}
        handleModalClose={(e: React.MouseEvent<HTMLDivElement>) =>
          handleModalClick(e)
        }
      />
      <button
        onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
          handleModalClick(e)
        }>
        중간에 뜨는 모달클릭
      </button>
      {/* <Modal
        type="center"
        children={
          <>
            <h1>중간에 뜨는 모달 내용</h1>
          </>
        }
        width={20}
        height={10}
        visible={visible}
        handleModalClose={(e: React.MouseEvent<HTMLDivElement>) =>
          handleModalClick(e)
        }
      /> */}

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
