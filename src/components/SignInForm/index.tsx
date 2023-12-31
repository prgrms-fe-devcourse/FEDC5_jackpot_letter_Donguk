import React from 'react';
import Description from '@components/Common/Description';
import Account  from '@components/Common/Account'
import Input from '@components/Common/Input'
import { SubmitHandler, useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import * as Style from './index.style';

const INPUTDATA = [
  {
    id: 1,
    label: '이메일',
    value: 'email',
    type: 'text'
  },
  {
    id: 2,
    label: '비밀번호',
    value: 'password',
    type: 'password'
  }
];

type InputValue = 'email' | 'password';
type SignInSchemaType = z.infer<typeof SingInSchema>;

const passwordRegex = new RegExp(/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,15}$/,);
const SingInSchema = z.object({
  email: z
    .string()
    .min(1, { message: '이메일을 입력해주세요!' })
    .email('올바른 이메일 형식이 아닙니다.'),
  password: z
    .string()
    .min(1, { message: '영문,숫자를 조합하여 입력해주세요! (8-15자)'})
    .regex(passwordRegex, '영문,숫자를 조합하여 입력해주세요! (8-15자)')
});

function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignInSchemaType>({ resolver: zodResolver(SingInSchema) });

  const onSubmit: SubmitHandler<SignInSchemaType> = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <Account>
      <Style.Form onSubmit={handleSubmit(onSubmit)}>
        <Style.FormTitle>로그인</Style.FormTitle>
        {INPUTDATA.map((data) => {
          const { id, label, value, type } = data;
          return (
            <React.Fragment key={id}>
              <Input
                label={label}
                value={value as InputValue}
                type={type}
                color={errors[value as InputValue] && 'error'}
                register={register}
                required
              />
              <ErrorMessage
                errors={errors}
                name={value as InputValue}
                render={({ message }) => (
                  <Description
                    color="error"
                    text={message}
                  />
                )}
              />
            </React.Fragment>
          );
        })}

        <Description text="계정이 없으시다면?" />

        <Style.Button
          color="#0EB29A"
          type="submit">
          로그인하기
        </Style.Button>
        
        <Style.Button
          color="#8C999A"
          type="submit">
          익명으로 체험하기
        </Style.Button>
        </Style.Form>
    </Account>
  );
}

export default SignInForm;
