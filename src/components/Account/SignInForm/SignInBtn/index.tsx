import Button from '@/components/Common/Button';

interface SignInBtnProps {
  startAnonymousExperience: () => void;
}

function SignInBtn({ startAnonymousExperience }: SignInBtnProps) {
  return (
    <>
      <Button
        content="로그인하기"
        type="submit"
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
    </>
  );
}

export default SignInBtn;
