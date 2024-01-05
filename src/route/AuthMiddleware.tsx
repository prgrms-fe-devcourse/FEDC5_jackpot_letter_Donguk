import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { PATH } from '../constants/path';
import { ACCESS_TOKEN_KEY } from '@/constants/api';
import { getStorage } from '@/utils/LocalStorage';

interface AuthMiddlewareProps {
  children: ReactElement;
}
const AuthMiddleware = ({ children }: AuthMiddlewareProps) => {
  const token = getStorage(ACCESS_TOKEN_KEY);

  if (!token) {
    return <Navigate to={PATH.SIGNIN} />;
  }
  return children;
};

export default AuthMiddleware;
