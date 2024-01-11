import { useRef, useState } from 'react';
import * as Style from './index.style';

function SendMessage() {
  const [text, setText] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleTextareaOnChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setText(e.currentTarget.value);

    if (textareaRef && textareaRef.current) {
      const maxHeight = 4 * 20;
      textareaRef.current.style.height = 'auto';

      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = `${Math.min(
        scrollHeight,
        maxHeight
      )}px`;
    }
  };
  return (
    <>
      <Style.sendMessage
        ref={textareaRef}
        value={text}
        onChange={handleTextareaOnChange}
        placeholder="메시지를 보내보세요."
      />
      <Style.IconWrapper>
        <Style.sendIcon src="/src/assets/send.svg" />
      </Style.IconWrapper>
    </>
  );
}

export default SendMessage;
