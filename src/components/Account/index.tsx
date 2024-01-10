import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { useAtomValue } from 'jotai';
import { PATH } from '@/constants/path';
import { darkAtom } from '@/store/theme';
import LongLogo from '../Common/Logo/LongLogo';
import ShortLogo from '../Common/Logo/ShortLogo';
import * as Style from './index.style';

interface AccountProps {
  children: ReactElement;
}

function Account({ children }: AccountProps) {
  const darkMode = useAtomValue(darkAtom);

  return (
    <Style.SignInContainer>
      <Style.HeaderContainer>
        <Style.ImageContainer>
          <LongLogo darkMode={darkMode} />
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
          <ShortLogo darkMode={darkMode} />
        </Style.ImageContainer>
      </Style.HeaderContainer>
      {children}
    </Style.SignInContainer>
  );
}

export default Account;
