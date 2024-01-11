import { useEffect, useState } from 'react';
import Header from '@components/MessageList/Header';
import SearchBar from '@components/MessageList/SearchBar';
import UserList from '@components/MessageList/UserList';
import { useAtomValue } from 'jotai';
import useUser from '@/hooks/api/useUser';
import { useUserListQuery } from '@/hooks/api/useUserListDataQuery';
import { idAtom } from '@/store/auth';
import { User } from '@/types/ResponseType';

function MessageListPage() {
  const userId = useAtomValue(idAtom);
  const { data: userListData } = useUserListQuery(); // 전체 데이터 리스트
  const [userFilterData, setUserFilterData] = useState<User[]>();
  const { data: userData } = useUser(userId);

  useEffect(() => {
    if (userListData) setUserFilterData(userListData);
  }, []);

  return (
    <>
      <Header userName={userData?.fullName} />
      <SearchBar
        userListData={userListData}
        setUserFilterData={setUserFilterData}
      />
      {userListData && (
        <UserList
          filteringData={userFilterData ? userFilterData : userListData}
        />
      )}
    </>
  );
}

export default MessageListPage;
