import Private from '@/assets/Private.svg';
import Public from '@/assets/Public.svg';
import { parsedDescription } from '@/utils/parse';
import { Option, OptionBox } from './index.style';

interface Props {
  description: string;
}
function ChannelOption({ description }: Props) {
  const result = parsedDescription(description);
  return (
    <>
      <OptionBox>
        <Option>
          <div>열람</div>
          <img src={result?.allowViewAll ? Public : Private} />
        </Option>
        <Option>
          <div>작성</div>
          <img src={result?.allowWriteAll ? Public : Private} />
        </Option>
      </OptionBox>
    </>
  );
}

export default ChannelOption;
