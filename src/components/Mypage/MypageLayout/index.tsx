import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { PATHNAME } from '@/constants/sidebar';
import Header from '../Header';
import { Container } from './index.style';

function MypageLayout() {
  const [title, setTitle] = useState('');
  const [isMypage, setIsMypage] = useState(false);

  const location = useLocation();

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
