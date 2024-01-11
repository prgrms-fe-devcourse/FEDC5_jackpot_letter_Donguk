import { useEffect, useState } from 'react';
import Header from '@components/MessageList/Header';
import SearchBar from '@components/MessageList/SearchBar';
import UserList from '@components/MessageList/UserList';
import { useUserListQuery } from '@/hooks/api/useUserListDataQuery';
import { User } from '@/types/ResponseType';

function MessageListPage() {
  const { data: userListData } = useUserListQuery(); // 전체 데이터 리스트
  const [userFilterData, setUserFilterData] = useState<User[]>();

  useEffect(() => {
    if (userListData) setUserFilterData(userListData);
  }, []);

  return (
    <>
      <Header />
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
