import { useNavigate } from 'react-router-dom';
import { theme } from '@/theme';
import Button from '../Button';
import * as Style from './index.style';

function EmptyChannel() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/channel/new');
  };

  return (
    <Style.UnGeneratedWrap>
      <span className="info-text">아직 생성된 박이 없어요!</span>
      <Button
        content="박 만들러 가기"
        styleOption={{
          width: '100%',
          fontSize: theme.typography.mypage_regular.fontSize
        }}
        onClick={handleButtonClick}
      />
    </Style.UnGeneratedWrap>
  );
}

export default EmptyChannel;
