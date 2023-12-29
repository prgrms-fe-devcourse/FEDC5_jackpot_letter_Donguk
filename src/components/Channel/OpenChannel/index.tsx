import Button from '@/components/Common/Button';
import OpenChannelImg from '@/assets/openChannel.svg';
import { ChannelButton, OpenIcon } from './index.style';

function OpenChannel() {
  return (
    <>
      <OpenIcon
        src={OpenChannelImg}
        alt="OpenChannel-img"
      />
      <ChannelButton>
        <Button
          onClick={() => console.log('Tets')}
          content="마음 전달하기"
          size="md"
          kind={'assistant'}
        />
        <Button
          onClick={() => console.log('나도 만들기')}
          content="나도 만들기"
          size="md"
        />
      </ChannelButton>
    </>
  );
}

export default OpenChannel;
