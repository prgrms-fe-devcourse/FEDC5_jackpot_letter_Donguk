import * as Style from './index.style';

interface headerProps {
  userName: string | undefined;
}
function Header({ userName }: headerProps) {
  return (
    <>
      <Style.HeaderContainer>
        <Style.HeaderInnerText>
          <Style.HeaderUserName>{userName}</Style.HeaderUserName>의 메시지함
        </Style.HeaderInnerText>
      </Style.HeaderContainer>
    </>
  );
}

export default Header;
