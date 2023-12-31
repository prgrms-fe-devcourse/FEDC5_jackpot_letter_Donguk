import * as S from './index.style';
import { ReactElement } from 'react';
import LongLogo from '@/assets/images/LongLogo.svg'
import ShortLogo from '@/assets/images/ShortLogo.svg'

interface AccountProps {
  children: ReactElement;
}

function Account({ children }: AccountProps) {
  return (
    <S.SignInContainer>
      <S.HeaderContainer>
        <S.ImageContainer>
          <img src={LongLogo} />
        </S.ImageContainer>
        <S.TitleContainer>
          <S.Description>큰 행운을 터트리며 마음을 나누는</S.Description>
          <S.Title>대박 사건</S.Title>
        </S.TitleContainer>
        <S.ImageContainer>
          <img src={ShortLogo} />
        </S.ImageContainer>
      </S.HeaderContainer>
        {children}
    </S.SignInContainer>
  );
}

export default Account;
