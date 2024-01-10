import { useState } from 'react';
import * as Style from './index.style';

function Header() {
  const [userName, setUserName] = useState('최익');

  return (
    <Style.HeaderContainer>
      <Style.HeaderInnerText>
        <Style.HeaderUserName>{userName}</Style.HeaderUserName>님의 박 주머니
      </Style.HeaderInnerText>
    </Style.HeaderContainer>
  );
}

export default Header;
