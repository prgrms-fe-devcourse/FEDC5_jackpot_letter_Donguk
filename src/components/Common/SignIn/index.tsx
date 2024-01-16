import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import useIsLoggedIn from '@/hooks/useIsLoggedIn';
import { PATH } from '@/constants/path';

interface SignInProps {
  children: ReactElement;
}
function SignIn({ children }: SignInProps) {
  const isLoggedIn = useIsLoggedIn();

  if (isLoggedIn) return <Navigate to={PATH.ROOT} />;

  return children;
}

export default SignIn;
