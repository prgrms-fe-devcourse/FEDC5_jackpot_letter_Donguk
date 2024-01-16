import { useEffect } from 'react';
import { useAtom, useAtomValue } from 'jotai';
import { idAtom, isLoggedInAtom, tokenAtom } from '@/store/auth';

function useIsLoggedIn() {
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);
  const token = useAtomValue(tokenAtom);
  const userId = useAtomValue(idAtom);

  useEffect(() => {
    if (token && userId !== import.meta.env.VITE_ANONYMOUS_ID_KEY) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [setIsLoggedIn, token, userId]);

  return isLoggedIn;
}

export default useIsLoggedIn;
