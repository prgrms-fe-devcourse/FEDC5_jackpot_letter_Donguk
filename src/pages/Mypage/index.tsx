import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useSetAtom } from 'jotai';
import Header from '@/components/Mypage/Header';
import Sidebar from '@/components/Mypage/Sidebar';
import Loading from '@/components/PostComment/Loading';
import useUser from '@/hooks/api/useUser';
import { ACCESS_USER_ID } from '@/constants/api';
import { PATHNAME } from '@/constants/sidebar';
import { userAtom } from '@/store/user';
import { getStorage } from '@/utils/LocalStorage';
import * as Style from './index.style';

function Mypage() {
  const [isMypage, setIsMypage] = useState(false);
  const [title, setTitle] = useState('');

  const location = useLocation();

  const setUser = useSetAtom(userAtom);

  const userId = getStorage(ACCESS_USER_ID, '');

  const { data: userData } = useUser(userId);

  const { pathname } = location;

  useEffect(() => {
    setIsMypage(pathname.replace('/mypage', '').length <= 1);
    setTitle(PATHNAME[pathname]);
  }, [location, pathname]);

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
          followersCount={userData?.followers.length || 0}
          followingCount={userData?.following.length || 0}
          image={userData?.image || ''}
        />
      </div>

      <Suspense
        fallback={
          <div className="loading-wrap">
            <Loading loadingSize={60} />
          </div>
        }
      >
        <main className="main">
          {!isMypage ? <Header title={title} /> : null}
          <Outlet />
        </main>
      </Suspense>
    </Style.Container>
  );
}

export default Mypage;
