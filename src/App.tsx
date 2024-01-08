import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import SignIn from '@components/Common/SignIn';
import Mypage from './pages/Mypage';
import { authRoutes, commonRoutes, userRoutes } from './route/AppRouter';
import AuthMiddleware from './route/AuthMiddleware';

function App() {
  const toastStyle = {
    fontWeight: 600,
    padding: '0.75rem 1rem',
    marginTop: '0.5rem'
  };

  return (
    <>
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
