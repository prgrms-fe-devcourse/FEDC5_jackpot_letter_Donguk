import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Global, ThemeProvider } from '@emotion/react';
import reset from './styles/reset';
import global from './styles/global';
import Modal from '@components/Common/Modal';
import useModal from './hooks/useModal';
import { Toaster } from 'react-hot-toast';
import { toast } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import Button from './components/Common/Button';
import SignIn from './components/Common/SignIn';
import useModal from './hooks/useModal';
import { authRoutes, userRoutes } from './route/AppRouter';
import AuthMiddleware from './route/AuthMiddleware';
import { theme } from './theme';

function App() {
  const [count, setCount] = useState(0);
  const [visible, handleModalClick, top, left] = useModal();

  const toastStyle = {
    fontWeight: 600,
    padding: '0.75rem 1rem',
    marginTop: '0.5rem'
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={[reset, global]} />
        <Routes>
          {authRoutes.map((route, idx) => (
            <Route
              path={route.path}
              element={<SignIn>{route.component}</SignIn>}
              key={idx}></Route>
          ))}
          {userRoutes.map((route, idx) => (
            <Route
              path={route.path}
              element={<AuthMiddleware>{route.component}</AuthMiddleware>}
              key={idx}></Route>
          ))}
        </Routes>
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