import { useState } from 'react';
import {
  HeaderContainer,
  HeaderInnerNameText,
  HeaderInnerText
} from './index.style';

function Header() {
  const [userName, setUserName] = useState('최익');
  console.log('커밋을 위한 임시 출력', setUserName);
  return (
    <HeaderContainer>
      <HeaderInnerText>
        <HeaderInnerNameText>{userName}</HeaderInnerNameText>님의 박 주머니
      </HeaderInnerText>
    </HeaderContainer>
  );
}

export default Header;
