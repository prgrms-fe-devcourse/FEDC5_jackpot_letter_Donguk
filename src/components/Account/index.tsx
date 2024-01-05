import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import LongLogo from '@/assets/images/LongLogo.svg';
import ShortLogo from '@/assets/images/ShortLogo.svg';
import { PATH } from '@/constants/path';
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
          <Style.Title>
            <Link to={PATH.ROOT}>대박 사건</Link>
          </Style.Title>
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
