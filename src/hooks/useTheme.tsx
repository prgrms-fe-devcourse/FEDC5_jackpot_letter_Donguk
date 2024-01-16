import { useCallback } from 'react';
import { useAtom } from 'jotai';
import { DARKMODE } from '@/constants/api';
import { darkAtom } from '@/store/theme';
import { setStorage } from '@/utils/LocalStorage';

function useTheme() {
  const [darkMode, setDarkMode] = useAtom(darkAtom);

  const toggleTheme = useCallback(() => {
    setDarkMode(!darkMode);
    setStorage(DARKMODE, !darkMode);
  }, [darkMode, setDarkMode]);

  return { toggleTheme, darkMode };
}

export default useTheme;
