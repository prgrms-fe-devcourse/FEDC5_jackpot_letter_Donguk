import ProfileImg from '@components/Common/ProfileImg';
import { User } from '@/types/ResponseType';
import * as Style from './index.style';

interface userListProps {
  filteringData: User[];
}

function UserList({ filteringData }: userListProps) {
  return (
    <>
      <Style.UserListContainer>
        {filteringData.map(({ fullName, image, isOnline, _id }) => (
          <Style.UserList key={_id}>
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
          </Style.UserList>
        ))}
      </Style.UserListContainer>
    </>
  );
}

export default UserList;
