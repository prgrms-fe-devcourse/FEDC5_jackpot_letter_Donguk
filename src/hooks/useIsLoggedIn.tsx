import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { ACCESS_TOKEN_KEY, ACCESS_USER_ID } from '@/constants/api';
import { isLoggedInAtom } from '@/store/auth';
import { getStorage } from '@/utils/LocalStorage';

function useIsLoggedIn() {
  const token = getStorage(ACCESS_TOKEN_KEY);
  const userId = getStorage(ACCESS_USER_ID);
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);

  useEffect(() => {
    if (token) {
      if (userId === import.meta.env.VITE_ANONYMOUS_ID_KEY) {
        setIsLoggedIn(false);
      } else {
        setIsLoggedIn(true);
      }
    } else {
      setIsLoggedIn(false);
    }
  }, [setIsLoggedIn, token, userId]);

  return isLoggedIn;
}

export default useIsLoggedIn;
