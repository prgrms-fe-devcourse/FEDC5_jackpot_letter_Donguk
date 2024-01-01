import { ReactElement } from 'react';
import LongLogo from '@/assets/images/LongLogo.svg';
import ShortLogo from '@/assets/images/ShortLogo.svg';
import * as Style from './index.style';

interface AccountProps {
  children: ReactElement;
}

function Account({ children }: AccountProps) {
  return (
    <Style.SignInContainer>
      <Style.HeaderContainer>
        <Style.ImageContainer>
          <img src={LongLogo} />
        </Style.ImageContainer>
        <Style.TitleContainer>
          <Style.Description>
            큰 행운을 터트리며 마음을 나누는
          </Style.Description>
          <Style.Title>대박 사건</Style.Title>
        </Style.TitleContainer>
        <Style.ImageContainer>
          <img src={ShortLogo} />
        </Style.ImageContainer>
      </Style.HeaderContainer>
      {children}
    </Style.SignInContainer>
  );
}

export default Account;
