import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Account from '@components/Common/Account';
import Description from '@components/Common/Description';
import Input from '@components/Common/Input';
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
  },
  {
    id: 3,
    label: '비밀번호 확인',
    value: 'checkPassword',
    type: 'password'
  }
];

type InputValue = 'email' | 'password' | 'checkPassword';
type SignUpSchemaType = z.infer<typeof SignUpSchema>;

const passwordRegex = new RegExp(/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,15}$/);
const SignUpSchema = z
  .object({
    name: z.string().min(2, { message: '이름을 입력해주세요!' }),
    email: z
      .string()
      .min(1, { message: '이메일을 입력해주세요!' })
      .email('올바른 이메일 형식이 아닙니다.'),
    password: z
      .string()
      .regex(passwordRegex, '영문,숫자를 조합하여 입력해주세요! (8-15자)'),
    checkPassword: z
      .string()
      .regex(passwordRegex, '영문,숫자를 조합하여 입력해주세요! (8-15자)')
  })
  .refine((data) => data.password === data.checkPassword, {
    path: ['checkPassword'],
    message: '비밀번호가 일치하지 않습니다.'
  });

function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema) });
  console.log(errors && errors);

  const onSubmit: SubmitHandler<SignUpSchemaType> = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <Account>
      <Style.Form onSubmit={handleSubmit(onSubmit)}>
        <Style.FormTitle>회원가입</Style.FormTitle>
        <Style.InputName>
          <Input
            width="7rem"
            label="이름(채널)"
            value="name"
            type="text"
            color={errors.name && 'error'}
            register={register}
            required
          />
          <Style.Button width="120px">중복 확인</Style.Button>
        </Style.InputName>
        <Description text=" 현재 설정한 이름은 채널명으로 사용됩니다 :)" />
        <ErrorMessage
          errors={errors}
          name="name"
          render={({ message }) => (
            <Description
              color="error"
              text={message}
            />
          )}
        />
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
        <Style.Button
          width="280px"
          type="submit">
          로그인하기
        </Style.Button>
      </Style.Form>
    </Account>
  );
}

export default SignUpForm;
