import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import Input from '@components/Common/Input';
import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Account from '@/components/Account';
import Description from '@/components/Account/Description';
import Button from '@/components/Common/Button';
import { useUserListQuery } from '@/hooks/api/useUserListQuery';
import { ACCOUNT_DATA } from '@/constants/account';
import { SignUpSchema } from '@/utils/validation';
import * as Style from './index.style';

type InputValue = 'email' | 'password';
type SignUpSchemaType = z.infer<typeof SignUpSchema>;

function SignUpForm() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema) });

  const handleSignUpSubmit: SubmitHandler<SignUpSchemaType> = (data) => {
    if (isDuplicate) handleDuplicateNameError();
    else {
      alert(JSON.stringify(data));
      toast.success('회원가입 성공!');
    }
  };

  const { data } = useUserListQuery();

  // 이름 중복 확인
  let isDuplicate = true;

  const checkForDuplicates = () => {
    const fullNameValue = getValues('fullName');

    if (!fullNameValue) {
      toast.error('이름을 입력해주세요');
      return;
    }

    const hasDuplicate = data?.findIndex(
      (user) => fullNameValue === user.fullName
    );

    if (hasDuplicate === -1) {
      isDuplicate = false;
    } else {
      isDuplicate = true;
    }

    if (isDuplicate) {
      toast.error('중복된 이름입니다.');
    } else {
      toast.success('사용 가능한 이름입니다');
    }
  };

  const handleDuplicateNameError = () => {
    toast.error('이름 중복 확인을 진행해주세요!');
    return;
  };

  return (
    <Account>
      <>
        <Style.Form onSubmit={handleSubmit(handleSignUpSubmit)}>
          <Style.FormTitle>회원가입</Style.FormTitle>
          <Style.InputName>
            <Input
              width="7rem"
              label="이름(채널)"
              value="fullName"
              type="text"
              color={errors.fullName && 'error'}
              register={register}
              required
            />
            <Button
              content="중복 확인"
              type="button"
              onClick={checkForDuplicates}
              styleOption={{
                height: '2.47rem',
                width: '7.5rem'
              }}
            />
          </Style.InputName>
          <Description text=" 현재 설정한 이름은 채널명으로 사용됩니다 :)" />
          <ErrorMessage
            errors={errors}
            name="fullName"
            render={({ message }) => (
              <Description
                color="error"
                text={message}
              />
            )}
          />

          {ACCOUNT_DATA.map((data) => {
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
          <Button
            content="로그인하기"
            type="submit"
            onClick={handleSubmit(handleSignUpSubmit)}
            styleOption={{
              height: '2.47rem',
              width: '17.5rem'
            }}
          />
        </Style.Form>
        <Toaster
          toastOptions={{
            style: { ...toastStyle }
          }}
        />
      </>
    </Account>
  );
}

export default SignUpForm;

const toastStyle = {
  fontWeight: 600,
  padding: '0.75rem 1rem',
  marginTop: '0.5rem'
};
