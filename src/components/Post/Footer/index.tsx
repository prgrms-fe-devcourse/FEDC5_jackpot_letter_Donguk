import { useNavigate } from 'react-router-dom';
import Button from '@components/Common/Button';
import { FooterContainer } from './index.style';

function Footer() {
  const navigate = useNavigate();

  /** 뒤로가기 함수 */
  const goBackPage = () => {
    navigate(-1);
  };

  return (
    <>
      <FooterContainer>
        <Button
          onClick={goBackPage}
          size="sm"
          content="이전"
          styleOption={{
            backgroundColor: 'transparent',
            border: 'solid 1px #8C999A',
            height: '2.5625rem'
          }}
        />
        <Button
          size="lg"
          content="메시지 남기기"
          styleOption={{
            height: '2.5625rem'
          }}
        />
      </FooterContainer>
    </>
  );
}

export default Footer;
