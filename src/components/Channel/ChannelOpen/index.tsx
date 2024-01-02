import Button from '@/components/Common/Button';
import OpenChannelImg from '@/assets/OpenChannel.svg';
import { ChannelButton, OpenIcon } from './index.style';

function ChannelOpen() {
  return (
    <>
      <OpenIcon
        src={OpenChannelImg}
        alt="OpenChannel-img"
      />
      <ChannelButton>
        <Button
          onClick={() => console.log('포스트 페이지 전환')}
          content="마음 전달하기"
          size="md"
          kind={'assistant'}
        />
        <Button
          onClick={() => console.log('생성 페이지 전환')}
          content="나도 만들기"
          size="md"
        />
      </ChannelButton>
    </>
  );
}

export default ChannelOpen;
