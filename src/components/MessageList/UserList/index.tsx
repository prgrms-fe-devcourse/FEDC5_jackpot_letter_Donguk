import ProfileImg from '@components/Common/ProfileImg';
import * as Style from './index.style';

function UserList() {
  const a = [
    '123',
    '245',
    '1231',
    '123',
    '245',
    '1231',
    '123',
    '245',
    '1231',
    '123',
    '245',
    '1231',
    '123',
    '245',
    '1231',
    '123',
    '245',
    '1231'
  ];
  return (
    <>
      <Style.UserListContainer>
        {a.map((item) => (
          <Style.UserList>
            <Style.UserProfile>
              <ProfileImg
                width={2}
                height={2}
                alt="messageList userProfile Image"
                image=""
              />
              <Style.UserOnline isColor={true} />
            </Style.UserProfile>
            <Style.UserName>{item}</Style.UserName>
          </Style.UserList>
        ))}
      </Style.UserListContainer>
    </>
  );
}

export default UserList;
