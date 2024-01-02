import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import SignInPage from '@/pages/SignInPage';
import SignUpPage from '@/pages/SignUpPage';

interface RouteProps {
  path: string;
  component: ReactElement;
  exact?: boolean;
}

// 로그인 상태 접근
const userRoutes: Array<RouteProps> = [
  { path: '/mypage', exact: true, component: <Navigate to="/mypage" /> }
];

// 로그인 상태x 접근
const authRoutes: Array<RouteProps> = [
  { path: '/', exact: true, component: <Navigate to="/" /> },
  { path: '/signin', component: <SignInPage /> },
  { path: '/signup', component: <SignUpPage /> }
];

export { userRoutes, authRoutes };
