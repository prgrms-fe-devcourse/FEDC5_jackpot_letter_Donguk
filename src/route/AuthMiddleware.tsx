import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import useIsLoggedIn from '@/hooks/useIsLoggedIn';
import { PATH } from '@/constants/path';

interface AuthMiddlewareProps {
  children: ReactElement;
}
const AuthMiddleware = ({ children }: AuthMiddlewareProps) => {
  const isLoggedIn = useIsLoggedIn();
  const navigate = useNavigate();

  if (!isLoggedIn) {
    navigate(PATH.SIGNIN);
  }

  return children;
};

export default AuthMiddleware;
