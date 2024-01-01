import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Input from '@components/Common/Input';
import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Account from '@/components/Account';
import Description from '@/components/Account/Description';
import { ACCOUNT_SIGNUP_DATA } from '@/constants/account';
import { SignUpSchema } from '@/utils/validation';
import * as Style from './index.style';

type InputValue = 'email' | 'password' | 'checkPassword';
type SignUpSchemaType = z.infer<typeof SignUpSchema>;

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
        {ACCOUNT_SIGNUP_DATA.map((data) => {
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