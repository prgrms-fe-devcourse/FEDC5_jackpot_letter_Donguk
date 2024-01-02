import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '@/components/Mypage/Sidebar';
import * as Style from './index.style';

function Mypage() {
  const [isMypage, setIsMypage] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setIsMypage(location.pathname.replace('/mypage', '').length <= 1);
  }, [location]);

  return (
    <Style.Container
      id="mypage"
      isMypage={isMypage}
    >
      <div className="sidebar-container">
        <Sidebar
          fullName="김유경"
          image=""
        />
      </div>
      <main className="main">
        <Outlet />
      </main>
    </Style.Container>
  );
}

export default Mypage;
