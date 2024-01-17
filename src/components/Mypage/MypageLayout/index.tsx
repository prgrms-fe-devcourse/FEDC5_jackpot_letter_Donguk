import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useSetAtom } from 'jotai';
import useUser from '@/hooks/api/useUser';
import { ACCESS_USER_ID } from '@/constants/api';
import { PATHNAME } from '@/constants/sidebar';
import { userAtom } from '@/store/user';
import { getStorage } from '@/utils/LocalStorage';
import Header from '../Header';
import { Container } from './index.style';

function MypageLayout() {
  const [title, setTitle] = useState('');
  const [isMypage, setIsMypage] = useState(false);
  const userId = getStorage(ACCESS_USER_ID, '');

  const location = useLocation();
  const setUser = useSetAtom(userAtom);
  const { data: userData } = useUser(userId);

  useEffect(() => {
    if (userData) {
      setUser(userData);
    }
  }, [setUser, userData]);

  useEffect(() => {
    const { pathname } = location;
    setIsMypage(pathname.replace('/mypage', '').length <= 1);
    setTitle(PATHNAME[pathname]);
  }, [location]);

  return (
    <Container className="main">
      {!isMypage ? <Header title={title} /> : null}
      <Outlet />
    </Container>
  );
}

export default MypageLayout;
