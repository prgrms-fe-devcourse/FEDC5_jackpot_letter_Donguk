import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import useIsLoggedIn from '@/hooks/useIsLoggedIn';
import { PATH } from '@/constants/path';

interface SignInProps {
  children: ReactElement;
}
function SignIn({ children }: SignInProps) {
  const isLoggedIn = useIsLoggedIn();
  const navigate = useNavigate();

  if (isLoggedIn) {
    navigate(PATH.ROOT);
  }

  return children;
}

export default SignIn;
