import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAtomValue } from 'jotai';
import Sidebar from '@/components/Mypage/Sidebar';
import { darkAtom } from '@/store/theme';
import { userAtom } from '@/store/user';
import * as Style from './index.style';

function Mypage() {
  const [isMypage, setIsMypage] = useState(false);

  const location = useLocation();

  const { pathname } = location;

  const darkMode = useAtomValue(darkAtom);
  const userData = useAtomValue(userAtom);

  useEffect(() => {
    setIsMypage(pathname.replace('/mypage', '').length <= 1);
  }, [location, pathname]);

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
