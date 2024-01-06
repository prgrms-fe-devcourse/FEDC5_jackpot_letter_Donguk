import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useSetAtom } from 'jotai';
import Sidebar from '@/components/Mypage/Sidebar';
import useUser from '@/hooks/api/useUser';
import { ACCESS_USER_ID } from '@/constants/api';
import { userAtom } from '@/store/user';
import { getStorage } from '@/utils/LocalStorage';
import * as Style from './index.style';

function Mypage() {
  const [isMypage, setIsMypage] = useState(false);

  const location = useLocation();

  const setUser = useSetAtom(userAtom);

  const userId = getStorage(ACCESS_USER_ID, '');

  const { data: userData } = useUser(userId);

  useEffect(() => {
    setIsMypage(location.pathname.replace('/mypage', '').length <= 1);
  }, [location]);

  useEffect(() => {
    if (userData) {
      setUser(userData);
    }
  }, [setUser, userData]);

  return (
    <Style.Container
      id="mypage"
      isMypage={isMypage}
    >
      <div className="sidebar-container">
        <Sidebar
          fullName={userData?.fullName ?? ''}
          followersCount={userData?.followers.length ?? 0}
          followingCount={userData?.following.length ?? 0}
          image={userData?.image ?? ''}
        />
      </div>
      <main className="main">
        <Outlet />
      </main>
    </Style.Container>
  );
}

export default Mypage;
