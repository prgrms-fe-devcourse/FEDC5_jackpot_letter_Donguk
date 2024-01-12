import * as Style from './index.style';

interface headerProps {
  channelName: string;
}

function Header({ channelName }: headerProps) {
  return (
    <Style.HeaderContainer>
      <Style.HeaderInnerText>
        <Style.HeaderUserName>{channelName}</Style.HeaderUserName>님의 박 주머니
      </Style.HeaderInnerText>
    </Style.HeaderContainer>
  );
}

export default Header;
