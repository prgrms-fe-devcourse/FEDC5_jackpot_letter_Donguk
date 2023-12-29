import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Global, ThemeProvider } from '@emotion/react';
import reset from './styles/reset';
import Modal from '@components/Common/Modal';
import useModal from './hooks/useModal';
import { Toaster } from 'react-hot-toast';
import { toast } from 'react-hot-toast';
import Button from './components/Common/Button';

import { theme } from './theme';

import { useRequestData } from './hooks/useRequestData';
import { requestAPI } from './api';

function App() {
  const { query } = useRequestData();
  const [visible, handleModalClick, top, left] = useModal();

  /* tanstack 호출 */
  const { isPending, error, data } = query({
    key: 'test',
    queryFunction: () =>
      requestAPI({
        method: 'GET',
        path: '/users/get-users'
      })
  });
  if (isPending) console.log('pending');
  if (error) console.log('error');
  console.log('데이터:', data);

  const [count, setCount] = useState(0);

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
      <ThemeProvider theme={theme}>
        <Global styles={reset} />

        <div>
          <a
            href="https://vitejs.dev"
            target="_blank">
            <img
              src={viteLogo}
              className="logo"
              alt="Vite logo"
            />
          </a>

          <h1 onClick={() => toast.success('성공했당')}>success case</h1>
          <h1 onClick={() => toast.error('실패했당')}>error case</h1>

          <Button
            size="md"
            content={'disabled, xs, primary'}
            onClick={() => toast.success('zmzm')}
            kind={'primary'}
          />
          <Toaster
            toastOptions={{
              style: { ...toastStyle }
            }}
          />
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo"
          />
        </div>
        <h1 onClick={() => toast.success('성공했당')}>success case</h1>
        <h1 onClick={() => toast.error('실패했당')}>error case</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>

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
