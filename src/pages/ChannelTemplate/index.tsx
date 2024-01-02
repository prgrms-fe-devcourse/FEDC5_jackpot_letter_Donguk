import { useState } from 'react';
import SelectBackground from '@/components/ChannelTemplate/SelectBackground';
import SelectColor from '@/components/ChannelTemplate/SelectColor';
import Button from '@/components/Common/Button';
import { ChannelButton } from './index.style';

function ChannelTemplate() {
  type PhaseType = { [key: number]: React.ReactElement };
  const PhaseInfo: PhaseType = {
    0: <SelectBackground />,
    1: <SelectColor />,
    2: <SelectBackground />
  };

  const [phase, setPhase] = useState<number>(0);
  return (
    <div>
      <div>{PhaseInfo[phase]}</div>
      <ChannelButton>
        <Button
          content="이전"
          onClick={() => setPhase(phase - 1)}
          kind={'outlined'}
          size="sm"
        />
        <Button
          content="생성하기"
          onClick={() => setPhase(phase + 1)}
          kind={'primary'}
          size="lg"
        />
      </ChannelButton>
    </div>
  );
}

export default ChannelTemplate;
