import { ReactElement, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAtom, useAtomValue } from 'jotai';
import { PATH } from '@/constants/path';
import { isLoggedInAtom, tokenAtom } from '@/store/auth';

interface SignInProps {
  children: ReactElement;
}
function SignIn({ children }: SignInProps) {
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);
  const tokenState = useAtomValue(tokenAtom);

  useEffect(() => {
    if (tokenState) {
      setIsLoggedIn(true);
    }
  }, [setIsLoggedIn, tokenState]);

  if (isLoggedIn) return <Navigate to={PATH.ROOT} />;

  return children;
}

export default SignIn;
