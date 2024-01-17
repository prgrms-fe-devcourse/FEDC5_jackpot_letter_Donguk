import { CSSProperties } from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import SignIn from '@components/Common/SignIn';
import * as Sentry from '@sentry/react';
import { useAtomValue } from 'jotai';
import { theme } from '@/theme';
import { Global } from '@emotion/react';
import ResponsiveLayout from './components/Common/Responsive/ResponsiveLayout';
import MypageLayout from './components/Mypage/MypageLayout';
import QueryErrorBoundary from './components/Mypage/QueryErrorBoundary';
import NotFoundPage from './pages/NotFoundPage';
import { authRoutes, commonRoutes, userRoutes } from './route/AppRouter';
import AuthMiddleware from './route/AuthMiddleware';
import MenuBar from './route/MenuBar';
import { darkAtom } from './store/theme';
import reset from './styles/_reset';
import global from './styles/global';
import RouteChangeTracker from './utils/RouteChangeTracker';

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
  RouteChangeTracker();

  return (
    <Sentry.ErrorBoundary>
      <Global
        styles={[reset, global(darkMode ? theme.darkTheme : theme.lightTheme)]}
      />
      <ResponsiveLayout>
        <Routes>
          {authRoutes.map((route, idx) => (
            <Route
              path={route.path}
              element={<SignIn>{route.component}</SignIn>}
              key={idx}></Route>
          ))}
          {userRoutes.page.map((route, idx) => (
            <Route
              path={route.path}
              element={
                <AuthMiddleware>
                  <MenuBar>{route.component}</MenuBar>
                </AuthMiddleware>
              }
              key={idx}></Route>
          ))}
          <Route
            path="/mypage"
            element={
              <AuthMiddleware>
                <>
                  <MenuBar>
                    <MypageLayout />
                  </MenuBar>
                </>
              </AuthMiddleware>
            }>
            {userRoutes.mypage.map((route, idx) => (
              <Route
                path={route.path}
                element={
                  <QueryErrorBoundary>
                    <AuthMiddleware>
                      <>{route.component}</>
                    </AuthMiddleware>
                  </QueryErrorBoundary>
                }
                key={idx}
              />
            ))}
          </Route>
          {commonRoutes.map((route, idx) => (
            <Route
              path={route.path}
              element={<MenuBar>{route.component}</MenuBar>}
              key={idx}
            />
          ))}
          <Route
            path="/*"
            element={<NotFoundPage />}
          />
        </Routes>
      </ResponsiveLayout>
      <Toaster
        toastOptions={{
          style: { ...toastStyle }
        }}
      />
    </Sentry.ErrorBoundary>
  );
}

export default App;
