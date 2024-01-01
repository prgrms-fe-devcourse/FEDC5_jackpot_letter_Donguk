import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Button from '@/components/Common/Button';
import Input from '@/components/Common/Input';
import { theme } from '@/theme';
import * as Style from './index.style';

interface PasswordUpdateValue {
  password: string;
  passwordCheck: string;
}

function PasswordUpdate() {
  const registerSchema = z
    .object({
      password: z
        .string()
        .min(1, '비밀번호를 입력해주세요.')
        .regex(
          /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,15}$/,
          '영문+숫자+특수문자(! @ # $ % & * ?) 조합 6~15자리를 입력해주세요.'
        ),
      passwordCheck: z.string().min(1, '비밀번호를 다시 입력해주세요.')
    })
    .refine((data) => data.password === data.passwordCheck, {
      path: ['passwordCheck'],
      message: '비밀번호가 일치하지 않습니다.'
    });
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<PasswordUpdateValue>({
    resolver: zodResolver(registerSchema)
  });

  const handleNameSubmit: SubmitHandler<PasswordUpdateValue> = (data) => {
    console.log(data);
  };

  return (
    <Style.Container className="container">
      <form
        onSubmit={handleSubmit(handleNameSubmit)}
        className="name-form"
      >
        <div className="input-wrap">
          <Input
            width="100%"
            height="3rem"
            type="password"
            label="비밀번호"
            register={register}
            value="password"
            required
          />
          {errors.password && (
            <span className="warning-text">{errors.password.message}</span>
          )}
          <Input
            width="100%"
            height="3rem"
            type="password"
            label="비밀번호 확인"
            register={register}
            value="passwordCheck"
            required
          />
          {errors.passwordCheck && (
            <span className="warning-text">{errors.passwordCheck.message}</span>
          )}
        </div>
        <Button
          content="비밀번호 변경"
          type="submit"
          onClick={handleSubmit(handleNameSubmit)}
          styleOption={{
            height: '3.5rem',
            width: '100%',
            fontSize: theme.typography.mypage_regular.fontSize
          }}
        />
      </form>
    </Style.Container>
  );
}

export default PasswordUpdate;
