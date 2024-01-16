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
          type="button"
          size="sm"
          content="이전"
          kind="outlined"
        />
        <Button
          size="lg"
          type="submit"
          content="메시지 남기기"

          // onClick={handleSubmit(onSubmit)}
        />
      </Style.FooterContainer>
    </>
  );
}

export default Footer;
