import { CiDark, CiLight } from 'react-icons/ci';
import useTheme from '@/hooks/useTheme';
import { DarkModeProps } from '../Logo/LongLogo';

function DarkMode({ darkMode }: DarkModeProps) {
  const { toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme}>
      {darkMode ? (
        <CiDark
          size={30}
          color="black"
        />
      ) : (
        <CiLight
          size={30}
          color="black"
        />
      )}
    </button>
  );
}

export default DarkMode;
