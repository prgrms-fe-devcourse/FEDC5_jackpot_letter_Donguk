import ProfileImg from '@components/Common/ProfileImg';
import * as Style from './index.style';

function Header() {
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
          image=""
        />
        <Style.UserOnline isColor={true} />
      </Style.UserProfile>
      <Style.UserName>닉네임</Style.UserName>
    </>
  );
}

export default Header;
