import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useAtomValue } from 'jotai';
import { tokenAtom } from '@/store/auth';

interface AuthMiddlewareProps {
  children: ReactElement;
}
const AuthMiddleware = ({ children }: AuthMiddlewareProps) => {
  const storage = useAtomValue(tokenAtom);
  if (!storage) {
    return <Navigate to="/signin" />;
  }
  return children;
};

export default AuthMiddleware;
