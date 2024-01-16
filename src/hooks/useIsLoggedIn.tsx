import { useEffect } from 'react';
import { useAtom, useAtomValue } from 'jotai';
import { idAtom, isLoggedInAtom } from '@/store/auth';

function useIsLoggedIn() {
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);
  const userId = useAtomValue(idAtom);

  useEffect(() => {
    if (userId === import.meta.env.VITE_ANONYMOUS_ID_KEY) {
      setIsLoggedIn(false);
    }
  }, [setIsLoggedIn, userId]);

  return isLoggedIn;
}

export default useIsLoggedIn;
