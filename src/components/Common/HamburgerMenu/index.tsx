import { useEffect, useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useAtom, useAtomValue } from 'jotai';
import { PATH } from '@/constants/path';
import { darkAtom } from '@/store/theme';
import { theme } from '@/theme';
import { useSignOutMutation } from '../../../hooks/api/useSignOutMutation';
import { isLoggedInAtom } from '../../../store/auth';
import DarkMode from '../../DarkMode';
import { Button, Container, Menu, MenuContainer } from './index.style';

function HamburgerMenu() {
  const [toggle, setToggle] = useState(false);

  const [isLoggedIn] = useAtom(isLoggedInAtom);
  const darkMode = useAtomValue(darkAtom);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { mutateSignOut } = useSignOutMutation();

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
    link: '/'
  },
  {
    id: 3,
    menu: '채널 목록',
    link: PATH.ROOT
  }
];
