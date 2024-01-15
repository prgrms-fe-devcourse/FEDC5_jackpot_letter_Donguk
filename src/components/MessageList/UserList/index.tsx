import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileImg from '@components/Common/ProfileImg';
import { useListOfSpecificMessages } from '@/hooks/api/useListOfSpecificUsers';
import { AuthenticationUser, Message } from '@/types/ResponseType';
import * as Style from './index.style';

interface userListProps {
  userName: string | undefined;
  filteringData: AuthenticationUser[];
}

interface specificUserList extends AuthenticationUser {
  receptionMessage: Message[] | undefined;
  image?: string;
}

function UserList({ userName, filteringData }: userListProps) {
  const navigate = useNavigate();
  const specificMessageData = useListOfSpecificMessages(filteringData); // 특정 사용자와의 메세지 데이터
  const [messageListData, setMessageListData] = useState<specificUserList[]>();

  /** 내가 읽지 않은 메세지 개수 */
  const recentMessageCount = (receptionMessage: Message[] | undefined) => {
    if (receptionMessage === undefined || receptionMessage.length === 0)
      return 0;

    return receptionMessage.filter(({ seen }) => seen === false).length;
  };
  console.log(messageListData);

  useEffect(() => {
    setMessageListData(
      filteringData.map((data, idx) => ({
        ...data,
        receptionMessage: specificMessageData[idx]
      }))
    );
  }, [specificMessageData]);

  return (
    <>
      <Style.UserListContainer>
        {messageListData &&
          messageListData.map(
            ({ fullName, image, isOnline, _id, receptionMessage }) =>
              fullName !== userName && (
                <Style.UserList
                  key={_id}
                  onClick={() => navigate(`/message/${_id}`)}>
                  <Style.UserProfile>
                    <ProfileImg
                      width={2}
                      height={2}
                      alt="messageList userProfile Image"
                      image={image ? image : ''}
                    />
                    <Style.UserOnline isColor={isOnline} />
                  </Style.UserProfile>
                  <Style.UserName>{fullName}</Style.UserName>
                  {recentMessageCount(receptionMessage) === 0 ? (
                    false
                  ) : (
                    <Style.MessageCount>
                      {recentMessageCount(receptionMessage)}
                    </Style.MessageCount>
                  )}
                </Style.UserList>
              )
          )}
      </Style.UserListContainer>
    </>
  );
}

export default UserList;
