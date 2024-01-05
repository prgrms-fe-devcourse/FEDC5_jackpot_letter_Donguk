import { useState } from 'react';
import { useAtomValue } from 'jotai';
import SelectAccess from '@/components/ChannelTemplate/SelectAccess';
import SelectBackground from '@/components/ChannelTemplate/SelectBackground';
import SelectColor from '@/components/ChannelTemplate/SelectColor';
import Button from '@/components/Common/Button';
import { useNewChannel } from '@/hooks/api/useNewChannel';
import { channelNameAtom } from '@/store/auth';
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
  const channelName = useAtomValue(channelNameAtom);

  const [channelOption, setChannelOption] = useState<ChannelOptionType>({
    background: 0,
    color: 0,
    allowViewAll: true,
    allowWriteAll: true
  });
  const { mutateNewChannel } = useNewChannel();
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
    2: (
      <SelectAccess
        option={channelOption}
        setOption={setChannelOption}
      />
    )
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
          content={phase === 2 ? '생성하기' : '다음'}
          onClick={() =>
            phase === 2
              ? mutateNewChannel({
                  name: channelName,
                  detail: channelOption
                })
              : setPhase(phase + 1)
          }
          kind={'primary'}
          size="lg"
        />
      </ChannelButton>
    </div>
  );
}

export default ChannelTemplate;
