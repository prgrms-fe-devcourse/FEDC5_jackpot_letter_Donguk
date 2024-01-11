import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Account from '@/components/Account';
import Description from '@/components/Account/Description';
import { useSignIn } from '@/hooks/api/useSignIn';
import { PATH } from '@/constants/path';
import { SignInSchema } from '@/utils/validation';
import FormInput from '../FormInput';
import * as Style from '../SignUpForm/index.style';
import SignInBtn from './SignInBtn';

export type SignInSchemaType = z.infer<typeof SignInSchema>;

function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignInSchemaType>({ resolver: zodResolver(SignInSchema) });

  const { mutateSignIn } = useSignIn();
  const navigate = useNavigate();

  const handleSignInSubmit: SubmitHandler<SignInSchemaType> = (signInData) => {
    mutateSignIn(signInData);
  };

  const startAnonymousExperience = () => {
    navigate(PATH.ROOT);
  };

  return (
    <Account>
      <Style.Form onSubmit={handleSubmit(handleSignInSubmit)}>
        <Style.FormTitle>로그인</Style.FormTitle>
        <FormInput
          errors={errors}
          register={register}
        />
        <Link to={PATH.SIGNUP}>
          <Description text="계정이 없으시다면?" />
        </Link>
        <SignInBtn startAnonymousExperience={startAnonymousExperience} />
      </Style.Form>
    </Account>
  );
}
export default SignInForm;
