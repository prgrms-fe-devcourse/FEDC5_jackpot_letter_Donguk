import { useNavigate } from 'react-router-dom';
import Button from '@components/Common/Button';
import * as Style from './index.style';

function Footer() {
  const navigate = useNavigate();

  /** 뒤로가기 함수 */
  const goBackPage = () => {
    navigate(-1);
  };
  return (
    <>
      <Style.FooterContainer>
        <Button
          onClick={goBackPage}
          size="sm"
          content="이전"
          kind="outlined"
        />
        <Button
          type="submit"
          size="lg"
          content="답장 남기기"
        />
      </Style.FooterContainer>
    </>
  );
}

export default Footer;
