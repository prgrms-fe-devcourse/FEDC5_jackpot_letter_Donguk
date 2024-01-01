import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Input from '@components/Common/Input';
import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Account from '@/components/Account';
import Description from '@/components/Account/Description';
import { ACCOUNT_SIGNIN_DATA } from '@/constants/account';
import { SingInSchema } from '@/utils/validation';
import * as Style from './index.style';

type InputValue = 'email' | 'password';
type SignInSchemaType = z.infer<typeof SingInSchema>;

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
        {ACCOUNT_SIGNIN_DATA.map((data) => {
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
