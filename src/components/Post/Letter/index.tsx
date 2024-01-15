import { UseFormRegister } from 'react-hook-form';
import * as Style from './index.style';

export interface useFormProps {
  letterTitle: string;
  letterComment: string;
}
interface letterProps {
  register: UseFormRegister<useFormProps>;
  userName: string;
}

function Letter({ register, userName }: letterProps) {
  return (
    <Style.LetterContainer>
      <Style.LetterTitle
        value={userName ? userName : undefined}
        placeholder={userName ? '' : '작성자명을 입력해주세요(최대 15자)'}
        maxLength={15}
        {...register('letterTitle', {
          required: '작성자명은 반드시 입력해야합니다.'
        })}
      />
      <Style.TitleUnderLine />
      <Style.LetterContent
        placeholder="내용을 입력하세요"
        {...register('letterComment', {
          required: '편지 내용은 반드시 입력해야합니다.'
        })}
      />
    </Style.LetterContainer>
  );
}

export default Letter;
