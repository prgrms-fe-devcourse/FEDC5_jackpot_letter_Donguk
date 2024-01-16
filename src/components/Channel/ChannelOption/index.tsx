import Private from '@/assets/Private.svg';
import Public from '@/assets/Public.svg';
import { Option, OptionBox } from './index.style';

interface Props {
  description: {
    allowViewAll: boolean;
    allowWriteAll: boolean;
    background: string;
    color: string;
  };
}
function ChannelOption({ description }: Props) {
  return (
    <>
      <OptionBox>
        <Option>
          <div>열람</div>
          <img src={description?.allowViewAll ? Public : Private} />
        </Option>
        <Option>
          <div>작성</div>
          <img src={description?.allowWriteAll ? Public : Private} />
        </Option>
      </OptionBox>
    </>
  );
}

export default ChannelOption;
