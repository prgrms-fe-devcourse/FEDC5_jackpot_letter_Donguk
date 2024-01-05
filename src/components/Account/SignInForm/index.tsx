import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Input from '@components/Common/Input';
import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Account from '@/components/Account';
import Description from '@/components/Account/Description';
import Button from '@/components/Common/Button';
import { useSignInMutation } from '@/hooks/api/useSignInMutation';
import { ACCOUNT_DATA } from '@/constants/account';
import { PATH } from '@/constants/path';
import { SingInSchema } from '@/utils/validation';
import * as Style from '../SignUpForm/index.style';

type InputValue = 'email' | 'password';
type SignInSchemaType = z.infer<typeof SingInSchema>;

function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignInSchemaType>({ resolver: zodResolver(SingInSchema) });

  const { mutateSignIn } = useSignInMutation();
  const navigate = useNavigate();

  const handleSignInSubmit: SubmitHandler<SignInSchemaType> = (signInData) => {
    mutateSignIn(signInData);
    toast.success('로그인 성공!');
  };

  const startAnonymousExperience = () => {
    navigate(PATH.ROOT);
  };

  return (
    <Account>
      <Style.Form onSubmit={handleSubmit(handleSignInSubmit)}>
        <Style.FormTitle>로그인</Style.FormTitle>
        {ACCOUNT_DATA.map((data) => {
          const { id, label, value, type } = data;
          return (
            <React.Fragment key={id}>
              <Input
                label={label}
                value={value as InputValue}
                type={type}
                height="2.47rem"
                width="17.5rem"
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

        <Link to={PATH.SIGNUP}>
          <Description text="계정이 없으시다면?" />
        </Link>

        <Button
          content="로그인하기"
          type="submit"
          onClick={handleSubmit(handleSignInSubmit)}
          styleOption={{
            height: '2.47rem',
            width: '17.5rem'
          }}
        />
        <Button
          content="익명으로 체험하기"
          type="button"
          onClick={startAnonymousExperience}
          styleOption={{
            height: '2.47rem',
            width: '17.5rem',
            backgroundColor: '#8C999A'
          }}
        />
      </Style.Form>
    </Account>
  );
}
export default SignInForm;
