import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '@/components/Common/Button';
import Input from '@/components/Common/Input';
import useUpdatePassword from '@/hooks/api/useUpdatePassword';
import { theme } from '@/theme';
import { PasswordSchema } from '@/utils/validation';
import * as Style from './index.style';

interface PasswordUpdateValue {
  password: string;
  passwordCheck: string;
}

function PasswordUpdate() {
  const registerSchema = PasswordSchema;
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<PasswordUpdateValue>({
    resolver: zodResolver(registerSchema)
  });

  const mutaion = useUpdatePassword();

  const handleNameSubmit: SubmitHandler<PasswordUpdateValue> = (data) => {
    mutaion.mutate(data.password);
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
