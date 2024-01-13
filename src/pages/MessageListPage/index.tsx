import { useEffect, useState } from 'react';
import Header from '@components/MessageList/Header';
import SearchBar from '@components/MessageList/SearchBar';
import UserList from '@components/MessageList/UserList';
import { useAtomValue } from 'jotai';
import useNotifycations from '@/hooks/api/useNotifycations';
import useUser from '@/hooks/api/useUser';
import { useUserListQuery } from '@/hooks/api/useUserListDataQuery';
import { idAtom } from '@/store/auth';
import { User } from '@/types/ResponseType';

function MessageListPage() {
  const userId = useAtomValue(idAtom);
  const { data: userListData } = useUserListQuery(); // 전체 데이터 리스트
  const [userFilterData, setUserFilterData] = useState<User[]>();
  const { data: userData } = useUser(userId); // userId 가 없을때 오류가 생김
  // console.log(userListData);

  const { data: notificationData } = useNotifycations();

  console.log('나에게 쌓인 알람 :', notificationData);

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
      {userListData && notificationData && (
        <UserList
          notificationData={notificationData}
          userName={userData?.fullName}
          filteringData={userFilterData ? userFilterData : userListData}
        />
      )}
    </>
  );
}

export default MessageListPage;
