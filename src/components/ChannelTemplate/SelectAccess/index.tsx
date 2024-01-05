import { Dispatch, SetStateAction } from 'react';
import { useAtomValue } from 'jotai';
import AccessCandidate from '@/components/ChannelTemplate/AccessCandidate';
import { Title } from '@/pages/ChannelList/index.style.tsx';
import { channelNameAtom } from '@/store/auth';
import { ChannelOptionType } from '@/types/channel';
import { Background } from '../SelectBackground/index.style';
import { CadidateContainer } from './index.style';

interface Props {
  option: ChannelOptionType;
  setOption: Dispatch<SetStateAction<ChannelOptionType>>;
}

function SelectAccess({ option, setOption }: Props) {
  const channelName = useAtomValue(channelNameAtom);

  return (
    <Background selectedNumber={option.background}>
      <Title>
        <h1>
          <span>{channelName}</span>님의 박
        </h1>
        <span>내 채널의 접근 권한을 선택해주세요</span>
      </Title>
      <CadidateContainer>
        <span>편지 공개여부</span>
        <div>
          <AccessCandidate
            security={true}
            selected={!option.allowViewAll}
            text={'나만 볼래요'}
            onClick={() => setOption({ ...option, allowViewAll: false })}
          />
          <AccessCandidate
            security={false}
            selected={!option.allowViewAll}
            text={'공개 할래요'}
            onClick={() => setOption({ ...option, allowViewAll: true })}
          />
        </div>
      </CadidateContainer>
      <CadidateContainer>
        <span>작성자 허용범위</span>
        <div>
          <AccessCandidate
            security={true}
            selected={!option.allowWriteAll}
            text={'실명만 받을래요'}
            onClick={() => setOption({ ...option, allowWriteAll: false })}
          />
          <AccessCandidate
            security={false}
            selected={!option.allowWriteAll}
            text={'익명도 괜찮아요'}
            onClick={() => setOption({ ...option, allowWriteAll: true })}
          />
        </div>
      </CadidateContainer>
    </Background>
  );
}

export default SelectAccess;
