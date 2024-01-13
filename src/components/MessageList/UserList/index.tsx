import { useNavigate } from 'react-router-dom';
import ProfileImg from '@components/Common/ProfileImg';
import { User } from '@/types/ResponseType';
import * as Style from './index.style';

interface userListProps {
  userName: string | undefined;
  filteringData: User[];
}

function UserList({ userName, filteringData }: userListProps) {
  const navigate = useNavigate();

  console.log('전체 회원 정보 리스트: ', filteringData);

  // const notificationMatch = (notificationData: Notification[], id: string) => {
  //   const notification = notificationData.find(
  //     ({ author }) => id === author._id
  //   );

  //   return notification ? notification.author.messages.length : 0;
  // };

  return (
    <>
      <Style.UserListContainer>
        {filteringData.map(
          ({ fullName, image, isOnline, _id }) =>
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
                <Style.MessageCount>1</Style.MessageCount>
              </Style.UserList>
            )
        )}
      </Style.UserListContainer>
    </>
  );
}

export default UserList;
