import * as Style from './index.style';

interface headerProps {
  channelName: string;
}

function Header({ channelName }: headerProps) {
  return (
    <>
      <Style.HeaderContainer>
        <Style.HeaderInnerText>
          <Style.HeaderUserName>{channelName}</Style.HeaderUserName>님에게
          <br />
          따뜻한 메시지를 남겨주세요
        </Style.HeaderInnerText>
      </Style.HeaderContainer>
    </>
  );
}

export default Header;
