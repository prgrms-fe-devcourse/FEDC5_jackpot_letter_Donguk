import { useNavigate } from 'react-router-dom';
import ProfileImg from '@components/Common/ProfileImg';
import arrowLeftIcon from '@/assets/ArrowLeft.svg';
import * as Style from './index.style';

interface headerProps {
  fullName: string;
  userImage: string;
  isOnline: boolean;
}
function Header({ fullName, userImage, isOnline }: headerProps) {
  const navigater = useNavigate();
  return (
    <>
      <Style.MoveBack
        src={arrowLeftIcon}
        isSize={1}
        onClick={() => navigater(-1)}
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
