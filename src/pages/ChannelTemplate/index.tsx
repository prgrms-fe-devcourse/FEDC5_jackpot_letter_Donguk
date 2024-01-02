import { useState } from 'react';
import SelectBackground from '@/components/ChannelTemplate/SelectBackground';
import SelectColor from '@/components/ChannelTemplate/SelectColor';
import Button from '@/components/Common/Button';
import { ChannelButton } from './index.style';

export interface ChannelOptionType {
  background: number;
  color: number;
  allowViewAll: boolean;
  allowWriteAll: boolean;
}

interface PhaseType {
  [key: number]: React.ReactElement;
}

function ChannelTemplate() {
  const [channelOption, setChannelOption] = useState<ChannelOptionType>({
    background: 0,
    color: 0,
    allowViewAll: true,
    allowWriteAll: true
  });

  const PhaseInfo: PhaseType = {
    0: (
      <SelectBackground
        option={channelOption}
        setOption={setChannelOption}
      />
    ),
    1: (
      <SelectColor
        option={channelOption}
        setOption={setChannelOption}
      />
    ),
    2: <div></div>
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
