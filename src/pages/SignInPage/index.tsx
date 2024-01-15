import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Account from '@/components/Account';
import Description from '@/components/Account/Description';
import FormInput from '@/components/Account/FormInput';
import SignInBtn from '@/components/Account/SignInBtn';
import { useSignIn } from '@/hooks/api/useSignIn';
import { PATH } from '@/constants/path';
import * as Style from '@/pages/SignUpPage/index.style';
import { SignInSchema } from '@/utils/validation';

export type SignInSchemaType = z.infer<typeof SignInSchema>;

function SignInPage() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignInSchemaType>({ resolver: zodResolver(SignInSchema) });

  const { mutateSignIn } = useSignIn();

  const handleSignInSubmit: SubmitHandler<SignInSchemaType> = (signInData) => {
    mutateSignIn(signInData);
  };

  return (
    <Account>
      <Style.Form onSubmit={handleSubmit(handleSignInSubmit)}>
        <Style.FormTitle>로그인</Style.FormTitle>
        <FormInput
          errors={errors}
          register={register}
        />
        <Style.SignUpLink>
          <Description text="대박사건이 처음이신가요?" />
          <Link to={PATH.SIGNUP}>
            <Description
              text="회원가입"
              color="green"
            />
          </Link>
        </Style.SignUpLink>
        <SignInBtn />
      </Style.Form>
    </Account>
  );
}

export default SignInPage;
