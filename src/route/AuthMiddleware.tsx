import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import useIsLoggedIn from '@/hooks/useIsLoggedIn';
import { PATH } from '../constants/path';

interface AuthMiddlewareProps {
  children: ReactElement;
}

const AuthMiddleware = ({ children }: AuthMiddlewareProps) => {
  const isLoggedIn = useIsLoggedIn();

  if (!isLoggedIn) {
    return <Navigate to={PATH.SIGNIN} />;
  }
  return children;
};

export default AuthMiddleware;
