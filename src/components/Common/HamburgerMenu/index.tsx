import { useEffect, useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useAtomValue } from 'jotai';
import useIsLoggedIn from '@/hooks/useIsLoggedIn';
import { PATH } from '@/constants/path';
import { darkAtom } from '@/store/theme';
import { theme } from '@/theme';
import { useSignOut } from '../../../hooks/api/useSignOut';
import DarkMode from '../../DarkMode';
import { Button, Container, Menu, MenuContainer } from './index.style';

function HamburgerMenu() {
  const [toggle, setToggle] = useState(false);
  const darkMode = useAtomValue(darkAtom);
  const isLoggedIn = useIsLoggedIn();

  const { pathname } = useLocation();

  const { mutateSignOut } = useSignOut();

  useEffect(() => {
    setToggle(false);
  }, [pathname, isLoggedIn]);

  const handleLogOut = () => {
    mutateSignOut();
    setToggle(!toggle);
  };

  return (
    <Container>
      <Button onClick={() => setToggle(!toggle)}>
        <IoMenu
          size={28}
          color={darkMode ? theme.palette.sub : theme.palette.dark}
        />
      </Button>
      {toggle && (
        <MenuContainer>
          {isLoggedIn &&
            USER_MENU.map((data) => (
              <Link
                to={data.link}
                key={data.id}>
                <Menu>{data.menu}</Menu>
              </Link>
            ))}
          <Link to={PATH.ROOT}>
            <Menu>채널 목록</Menu>
          </Link>
          {isLoggedIn ? (
            <Button onClick={handleLogOut}>
              <Menu>로그아웃</Menu>
            </Button>
          ) : (
            <Link to={PATH.SIGNIN}>
              <Menu>로그인</Menu>
            </Link>
          )}

          <DarkMode darkMode={darkMode} />
        </MenuContainer>
      )}
    </Container>
  );
}

export default HamburgerMenu;

const USER_MENU = [
  {
    id: 1,
    menu: '마이페이지',
    link: PATH.MYPAGE
  },
  {
    id: 2,
    menu: '쪽지함',
    link: '/messageList'
  }
];
