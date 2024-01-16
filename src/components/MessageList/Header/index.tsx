import * as Style from './index.style';

interface headerProps {
  userName: string;
  darkMode: boolean;
}
function Header({ darkMode, userName }: headerProps) {
  return (
    <>
      <Style.HeaderContainer>
        <Style.HeaderInnerText darkMode={darkMode}>
          <Style.HeaderUserName>{userName}</Style.HeaderUserName>의 메시지함
        </Style.HeaderInnerText>
      </Style.HeaderContainer>
    </>
  );
}

export default Header;
