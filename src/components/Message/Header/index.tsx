import ProfileImg from '@components/Common/ProfileImg';
import * as Style from './index.style';

interface headerProps {
  fullName: string;
  userImage: string;
  isOnline: boolean;
}
function Header({ fullName, userImage, isOnline }: headerProps) {
  return (
    <>
      <Style.MoveBack
        src="/src/assets/ArrowLeft.svg"
        isSize={1}
      />
      <Style.UserProfile>
        <ProfileImg
          width={2}
          height={2}
          alt="messageList userProfile Image"
          image={userImage ? userImage : ''}
        />
        <Style.UserOnline isColor={isOnline} />
      </Style.UserProfile>
      <Style.UserName>{fullName}</Style.UserName>
    </>
  );
}

export default Header;
