import { Toaster } from 'react-hot-toast';
import Modal from '@components/Common/Modal';
import { Global, ThemeProvider } from '@emotion/react';
import useModal from './hooks/useModal';
import { resetStyle, responsiveStyle } from './styles';
import { theme } from './theme';

function App() {
  const [visible, handleModalClick, top, left] = useModal();

  const toastStyle = {
    fontWeight: 600,
    padding: '0.75rem 1rem',
    marginTop: '0.5rem'
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={resetStyle} />
        <Global styles={responsiveStyle} />
        <button
          style={{ float: 'right' }}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            handleModalClick(e);
          }}
        >
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
          }
        >
          중간에 뜨는 모달클릭
        </button>

        <Toaster
          toastOptions={{
            style: { ...toastStyle }
          }}
        />
      </ThemeProvider>
    </>
  );
}

export default App;
