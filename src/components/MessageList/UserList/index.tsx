import { useNavigate } from 'react-router-dom';
import ProfileImg from '@components/Common/ProfileImg';
import { User } from '@/types/ResponseType';
import * as Style from './index.style';

interface userListProps {
  userName: string;
  filteringData: User[];
}

function UserList({ userName, filteringData }: userListProps) {
  const navigate = useNavigate();

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
              </Style.UserList>
            )
        )}
      </Style.UserListContainer>
    </>
  );
}

export default UserList;
