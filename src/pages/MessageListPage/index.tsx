import { useEffect, useState } from 'react';
import Header from '@components/MessageList/Header';
import SearchBar from '@components/MessageList/SearchBar';
import UserList from '@components/MessageList/UserList';
import { useAtomValue } from 'jotai';
import useUser from '@/hooks/api/useUser';
import { useUserList } from '@/hooks/api/useUserList';
import { idAtom } from '@/store/auth';
import { darkAtom } from '@/store/theme';
import { AuthenticationUser } from '@/types/ResponseType';

function MessageListPage() {
  const userId = useAtomValue(idAtom);
  const darkMode = useAtomValue(darkAtom);
  const { data: userListData } = useUserList(); // 전체 데이터 리스트
  const [userFilterData, setUserFilterData] = useState<AuthenticationUser[]>(); // 필터링 데이터
  const { data: userData } = useUser(userId); // userId 가 없을때 오류가 생김

  useEffect(() => {
    if (userListData) setUserFilterData(userListData);
  }, []);

  return (
    <>
      {userData && (
        <Header
          darkMode={darkMode}
          userName={userData?.fullName}
        />
      )}
      {userListData && (
        <SearchBar
          userListData={userListData}
          setUserFilterData={setUserFilterData}
        />
      )}
      {userListData && userData && (
        <UserList
          userName={userData?.fullName}
          filteringData={userFilterData ? userFilterData : userListData}
        />
      )}
    </>
  );
}

export default MessageListPage;
