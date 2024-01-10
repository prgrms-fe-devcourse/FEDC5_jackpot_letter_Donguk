import { useNavigate } from 'react-router';
import { useAtomValue } from 'jotai';
import Lottie from 'lottie-react';
import Button from '@/components/Common/Button';
import LongLogo from '@/components/Common/Logo/LongLogo';
import ShortLogo from '@/components/Common/Logo/ShortLogo';
import loadingLottie from '@/assets/Animation - 1704792709727.json';
import { PATH } from '@/constants/path';
import { darkAtom } from '@/store/theme';
import * as Style from './index.style';

function NotFoundPage() {
  const navigate = useNavigate();
  const darkMode = useAtomValue(darkAtom);

  return (
    <div>
      <Style.LogoContainer>
        <Style.ImageWrapper>
          <LongLogo darkMode={darkMode} />
        </Style.ImageWrapper>
        <Style.LottieContainer>
          <Lottie animationData={loadingLottie} />
        </Style.LottieContainer>
        <Style.ImageWrapper>
          <ShortLogo darkMode={darkMode} />
        </Style.ImageWrapper>
      </Style.LogoContainer>
      <Style.SubContainer>
        <Style.MainText>원하시는 페이지를 찾을 수 없습니다.</Style.MainText>
        <Style.SubText>
          찾으려는 페이지의 주소가 잘못 입력되었거나,
          <br />
          주소의 변경 혹은 삭제로 인해 사용하실 수 없습니다. <br />
          입력하신 페이지의 주소가 정확한지 <br />
          다시 한번 확인해 주세요.
        </Style.SubText>
        <Style.BtnWrapper>
          <Button
            onClick={() => navigate(PATH.ROOT)}
            content="홈으로 돌아가기"
          />
        </Style.BtnWrapper>
      </Style.SubContainer>
    </div>
  );
}

export default NotFoundPage;
