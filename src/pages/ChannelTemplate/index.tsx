import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAtomValue } from 'jotai';
import SelectAccess from '@/components/ChannelTemplate/SelectAccess';
import SelectBackground from '@/components/ChannelTemplate/SelectBackground';
import SelectColor from '@/components/ChannelTemplate/SelectColor';
import Button from '@/components/Common/Button';
import { useCreateChannel } from '@/hooks/api/useCreateChannel';
import { channelNameAtom } from '@/store/auth';
import { ChannelOptionType } from '@/types/channel';
import { Body } from '../PostCreate/index.style';
import { ChannelButton } from './index.style';

interface PhaseType {
  [key: number]: React.ReactElement;
}

function ChannelTemplate() {
  const channelName = useAtomValue(channelNameAtom);

  const [channelOption, setChannelOption] = useState<ChannelOptionType>({
    background: 'original',
    color: 'red',
    allowViewAll: true,
    allowWriteAll: true
  });
  const { mutate } = useCreateChannel();
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

  const isSubmit = phase === 2;
  const isInit = phase === 0;
  const navigate = useNavigate();
  const handleNextButtonClick = () => {
    isSubmit
      ? mutate({
          name: `${channelName}`,
          description: JSON.stringify(channelOption)
        })
      : setPhase(phase + 1);
  };

  const handlePrevButtonClick = () => {
    isInit ? navigate(-1) : setPhase(phase - 1);
  };
  return (
    <Body>
      <div>{PhaseInfo[phase]}</div>
      <ChannelButton>
        <Button
          content="이전"
          onClick={handlePrevButtonClick}
          kind={'outlined'}
          size="sm"
        />
        <Button
          content={isSubmit ? '생성하기' : '다음'}
          onClick={handleNextButtonClick}
          kind={'primary'}
          size="lg"
        />
      </ChannelButton>
    </Body>
  );
}

export default ChannelTemplate;
