import { useContext } from 'react';
import { TextareaContext, TextareaProps } from './index';
import * as Style from './index.style';

function TextareaTitle({
  value,
  register,
  placeholder,
  maxLength
}: TextareaProps) {
  const { darkMode } = useContext(TextareaContext);
  return (
    <Style.TextareaTitle
      darkMode={darkMode}
      value={value}
      placeholder={placeholder}
      maxLength={maxLength}
      {...(register && {
        ...register('letterTitle', {
          required: '작성자명은 반드시 입력해야합니다.'
        })
      })}
    />
  );
}

export default TextareaTitle;
