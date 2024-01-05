import { useState } from 'react';
import * as Style from './index.style';

function Header() {
  const [userName, setUserName] = useState('최익');
  console.log(setUserName);
  return (
    <>
      <Style.HeaderContainer>
        <Style.HeaderInnerText>
          <Style.HeaderUserName>{userName}</Style.HeaderUserName>님에게
          <br />
          따뜻한 메시지를 남겨주세요
        </Style.HeaderInnerText>
      </Style.HeaderContainer>
    </>
  );
}

export default Header;
