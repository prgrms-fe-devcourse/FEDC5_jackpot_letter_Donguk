import { Global } from '@emotion/react';
import reset from './styles/reset';
import Modal from '@components/Common/Modal';
import useModal from './hooks/useModal';

function App() {
  const [visible, handleModalClick] = useModal();

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
    </>
  );
}

export default App;
