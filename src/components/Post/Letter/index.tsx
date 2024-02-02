import { UseFormRegister } from 'react-hook-form';
import Textarea from '@components/Common/Textarea';

export interface useFormProps {
  letterTitle: string;
  letterComment: string;
}
interface letterProps {
  darkMode: boolean;
  register: UseFormRegister<useFormProps>;
  userName: string;
}

function Letter({ darkMode, register, userName }: letterProps) {
  return (
    <Textarea>
      <Textarea.TextareaTitle
        darkMode={darkMode}
        value={
          userName ? (userName === '익명' ? undefined : userName) : undefined
        }
        placeholder={
          userName
            ? userName === '익명'
              ? '작성자명을 입력해주세요(최대 15자)'
              : ''
            : '작성자명을 입력해주세요(최대 15자)'
        }
        maxLength={15}
        register={register}
      />
      <Textarea.TextareaUnderLine />
      <Textarea.TextareaContent
        darkMode={darkMode}
        placeholder={'내용을 입력하세요'}
        register={register}
      />
    </Textarea>
  );
}

export default Letter;
