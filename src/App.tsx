import { CSSProperties } from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import SignIn from '@components/Common/SignIn';
import { useAtomValue } from 'jotai';
import { theme } from '@/theme';
import { Global } from '@emotion/react';
import DarkMode from './components/Common/DarkMode';
import Mypage from './pages/Mypage';
import NotFoundPage from './pages/NotFoundPage';
import { authRoutes, commonRoutes, userRoutes } from './route/AppRouter';
import AuthMiddleware from './route/AuthMiddleware';
import { darkAtom } from './store/theme';
import reset from './styles/_reset';
import global from './styles/global';

interface ToastStyleProps extends CSSProperties {
  textAlign: 'center';
  wordBreak: 'keep-all';
}

function App() {
  const toastStyle: ToastStyleProps = {
    fontWeight: 600,
    padding: '0.75rem 1rem',
    marginTop: '0.5rem',
    textAlign: 'center',
    wordBreak: 'keep-all'
  };

  const darkMode = useAtomValue(darkAtom);

  return (
    <>
      <Global
        styles={[reset, global(darkMode ? theme.darkTheme : theme.lightTheme)]}
      />
      <DarkMode darkMode={darkMode} />
      <Routes>
        {authRoutes.map((route, idx) => (
          <Route
            path={route.path}
            element={<SignIn>{route.component}</SignIn>}
            key={idx}
          ></Route>
        ))}
        {userRoutes.page.map((route, idx) => (
          <Route
            path={route.path}
            element={<AuthMiddleware>{route.component}</AuthMiddleware>}
            key={idx}
          ></Route>
        ))}
        <Route
          path="/mypage"
          element={
            <AuthMiddleware>
              <Mypage />
            </AuthMiddleware>
          }
        >
          {userRoutes.mypage.map((route, idx) => (
            <Route
              path={route.path}
              element={<AuthMiddleware>{route.component}</AuthMiddleware>}
              key={idx}
            ></Route>
          ))}
        </Route>
        {commonRoutes.map((route, idx) => (
          <Route
            path={route.path}
            element={<>{route.component}</>}
            key={idx}
          ></Route>
        ))}
        <Route
          path="/*"
          element={<NotFoundPage />}
        />
      </Routes>
      <Toaster
        toastOptions={{
          style: { ...toastStyle }
        }}
      />
    </>
  );
}

export default App;
