import { useContext } from 'react';
import { TextareaContext, TextareaProps } from './index';
import * as Style from './index.style';

function TextareaContent({ register, placeholder }: TextareaProps) {
  const { darkMode } = useContext(TextareaContext);

  return (
    <Style.TextareaContent
      darkMode={darkMode}
      placeholder={placeholder}
      {...(register && {
        ...register('letterContent', {
          required: '작성자명은 반드시 입력해야합니다.'
        })
      })}
    />
  );
}

export default TextareaContent;
