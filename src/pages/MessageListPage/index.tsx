import { useEffect, useState } from 'react';
import Header from '@components/MessageList/Header';
import SearchBar from '@components/MessageList/SearchBar';
import UserList from '@components/MessageList/UserList';
import { useAtomValue } from 'jotai';
// import { useGetMessageConversations } from '@/hooks/api/useGetMessageConversations.ts';
import useUser from '@/hooks/api/useUser';
import { useUserList } from '@/hooks/api/useUserList';
import { idAtom } from '@/store/auth';
import { User } from '@/types/ResponseType';

function MessageListPage() {
  const userId = useAtomValue(idAtom);
  const { data: userListData } = useUserList(); // 전체 데이터 리스트
  const [userFilterData, setUserFilterData] = useState<User[]>();
  const { data: userData } = useUser(userId); // userId 가 없을때 오류가 생김

  // const { data } = useGetMessageConversations();
  // console.log('나와 대화한 사람들', data);

  useEffect(() => {
    if (userListData) setUserFilterData(userListData);
  }, []);

  return (
    <>
      {userData && <Header userName={userData?.fullName} />}
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
