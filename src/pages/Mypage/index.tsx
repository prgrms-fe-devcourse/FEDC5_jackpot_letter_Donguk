import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAtomValue, useSetAtom } from 'jotai';
import Sidebar from '@/components/Mypage/Sidebar';
import useUser from '@/hooks/api/useUser';
import { ACCESS_USER_ID } from '@/constants/api';
import { darkAtom } from '@/store/theme';
import { userAtom } from '@/store/user';
import { getStorage } from '@/utils/LocalStorage';
import * as Style from './index.style';

function Mypage() {
  const [isMypage, setIsMypage] = useState(false);

  const location = useLocation();

  const setUser = useSetAtom(userAtom);

  const userId = getStorage(ACCESS_USER_ID, '');

  const { data: userData } = useUser(userId);

  const { pathname } = location;

  const darkMode = useAtomValue(darkAtom);

  useEffect(() => {
    setIsMypage(pathname.replace('/mypage', '').length <= 1);
  }, [location, pathname]);

  useEffect(() => {
    if (userData) {
      setUser(userData);
    }
  }, [setUser, userData]);

  return (
    <Style.Container
      darkMode={darkMode}
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
    </Style.Container>
  );
}

export default Mypage;
