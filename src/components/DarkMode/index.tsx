import toast from 'react-hot-toast';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import useTheme from '@/hooks/useTheme';
import { theme } from '@/theme';
import { DarkModeProps } from '../Common/Logo/LongLogo';
import { Container, Text } from './index.style';

function DarkMode({ darkMode }: DarkModeProps) {
  const { toggleTheme } = useTheme();

  const handleClickButton = () => {
    const currentPath = document.location.pathname;
    const isChannelPage = currentPath.startsWith('/channel/');
    if (isChannelPage)
      toast.error('해당 페이지는 다크모드 설정을 지원하지 않아요');
    toggleTheme();
  };

  return (
    <Container onClick={handleClickButton}>
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
