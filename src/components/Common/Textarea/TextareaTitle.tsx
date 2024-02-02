import { TextareaProps } from './index';
import * as Style from './index.style';

function TextareaTitle({
  darkMode,
  value,
  register,
  placeholder,
  maxLength
}: TextareaProps) {
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
