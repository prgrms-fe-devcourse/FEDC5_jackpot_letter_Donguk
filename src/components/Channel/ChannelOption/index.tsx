import { IoLockClosedOutline, IoLockOpenOutline } from 'react-icons/io5';
import { useAtomValue } from 'jotai/react';
import { darkAtom } from '@/store/theme';
import { theme } from '@/theme';
import { parsedDescription } from '@/utils/parse';
import { Option, OptionBox } from './index.style';

interface Props {
  description: string;
}

function ChannelOption({ description }: Props) {
  const darkMode = useAtomValue(darkAtom);
  const result = parsedDescription(description);

  const getPublicIcon = () => (
    <IoLockOpenOutline
      size={28}
      color={darkMode ? theme.palette.gray_2 : theme.palette.dark}
    />
  );

  const getPrivateIcon = () => (
    <IoLockClosedOutline
      size={28}
      color={darkMode ? theme.palette.gray_2 : theme.palette.dark}
    />
  );

  return (
    <>
      <OptionBox>
        <Option darkMode={darkMode}>
          <div>열람</div>
          {result?.allowViewAll ? getPublicIcon() : getPrivateIcon()}
        </Option>
        <Option darkMode={darkMode}>
          <div>작성</div>
          {result?.allowWriteAll ? getPublicIcon() : getPrivateIcon()}
        </Option>
      </OptionBox>
    </>
  );
}

export default ChannelOption;
