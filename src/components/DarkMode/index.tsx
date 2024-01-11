import { MdDarkMode, MdLightMode } from 'react-icons/md';
import useTheme from '@/hooks/useTheme';
import { theme } from '@/theme';
import { DarkModeProps } from '../Common/Logo/LongLogo';
import { Container, Text } from './index.style';

function DarkMode({ darkMode }: DarkModeProps) {
  const { toggleTheme } = useTheme();
  return (
    <Container onClick={toggleTheme}>
      {darkMode ? (
        <>
          <MdDarkMode
            size={25}
            fill={theme.palette.dark}
          />
          <Text>다크모드</Text>
        </>
      ) : (
        <>
          <MdLightMode
            size={25}
            fill="orange"
          />
          <Text>라이트모드</Text>
        </>
      )}
    </Container>
  );
}

export default DarkMode;
