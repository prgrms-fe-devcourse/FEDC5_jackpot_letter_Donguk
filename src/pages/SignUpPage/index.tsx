import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Account from '@/components/Account';
import FormInput from '@/components/Account/FormInput';
import InputName from '@/components/Account/InputName';
import Button from '@/components/Common/Button';
import { useSignUp } from '@/hooks/api/useSignUp';
import { useUserList } from '@/hooks/api/useUserList';
import { SignUpSchema } from '@/utils/validation';
import * as Style from './index.style';

type SignUpSchemaType = z.infer<typeof SignUpSchema>;

function SignUpPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema) });

  const [isDuplicate, setIsDuplicate] = useState(false);
  const [isDuplicateChecked, setIsDuplicateChecked] = useState(false);

  const { mutateSignUp } = useSignUp();
  const { data: userList } = useUserList();

  const fullNameValue = watch('fullName', '');

  // 이름 중복 확인
  useEffect(() => {
    setIsDuplicate(false);
    setIsDuplicateChecked(false);
  }, [fullNameValue]);

  const checkForDuplicates = () => {
    if (!fullNameValue) {
      toast.error('이름을 입력해주세요');
      return;
    }

    const hasDuplicate = userList?.findIndex(
      (user) => fullNameValue === user.fullName
    );

    return hasDuplicate !== -1;
  };

  const handleCheckForDuplicates = () => {
    const result = checkForDuplicates();
    setIsDuplicateChecked(true);

    if (result !== undefined) {
      setIsDuplicate(result);
      if (result) {
        toast.error('동일한 닉네임이 존재합니다.');
        setIsDuplicateChecked(false);
      } else {
        toast.success('사용 가능한 이름입니다.');
      }
    }
  };

  const handleSignUpSubmit: SubmitHandler<SignUpSchemaType> = (signUpData) => {
    if (!isDuplicateChecked) {
      toast.error('중복 확인을 먼저 진행해주세요.');
      return;
    }

    if (isDuplicateChecked && !isDuplicate) {
      mutateSignUp(signUpData);
    }
  };
  return (
    <Account>
      <Style.Form onSubmit={handleSubmit(handleSignUpSubmit)}>
        <Style.FormTitle>회원가입</Style.FormTitle>
        <InputName
          errors={errors}
          register={register}
          handleCheckForDuplicates={handleCheckForDuplicates}
        />
        <FormInput
          errors={errors}
          register={register}
        />
        <Button
          content="회원가입하기"
          type="submit"
          onClick={handleSubmit(handleSignUpSubmit)}
          styleOption={{
            height: '2.47rem',
            width: '17.5rem'
          }}
        />
      </Style.Form>
    </Account>
  );
}

export default SignUpPage;
