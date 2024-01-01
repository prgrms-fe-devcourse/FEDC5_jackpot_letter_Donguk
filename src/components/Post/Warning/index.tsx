import { useState } from 'react';
import {
  WarningContainer,
  WarninginnerSvg,
  WarninginnerText
} from './index.style';

function Warning() {
  const [isWarningMessage, setIsWarningMessage] = useState(true); // warning messsage를 위한 임시 state
  console.log('커밋을 위한 임시 출력', setIsWarningMessage);
  const warningMessage = isWarningMessage
    ? '이 트리는 비공개 박으로, 메시지는\n박 주인에게만 보여져요.'
    : '이 트리는 공개 박으로, 메시지는\n모든 사람이 볼 수 있어요.';

  return (
    <>
      <WarningContainer>
        <WarninginnerSvg src="/src/assets/WarningLogo.svg" />
        <WarninginnerText>{warningMessage}</WarninginnerText>
      </WarningContainer>
    </>
  );
}

export default Warning;
