import warningIcon from '@/assets/WarningLogo.svg';
import { channelInfo } from '../index';
import * as Style from './index.style';

function Warning({ allowRangeData }: channelInfo) {
  const warningMessage = allowRangeData.allowViewAll
    ? '이 박은 공개 박으로, 메시지는\n모든 사람이 볼 수 있어요.'
    : '이 박은 비공개 박으로, 메시지는\n박 주인에게만 보여져요.';

  return (
    <>
      <Style.WarningContainer>
        <Style.WarningLogo src={warningIcon} />
        <Style.WarninginnerText>{warningMessage}</Style.WarninginnerText>
      </Style.WarningContainer>
    </>
  );
}

export default Warning;
