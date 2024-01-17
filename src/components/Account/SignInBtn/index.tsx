import toast from 'react-hot-toast';
import Button from '@/components/Common/Button';

interface ButtonType {
  onClick?: () => void;
}
function SignInBtn({ onClick }: ButtonType) {
  const startAnonymousExperience = () => {
    toast.error('서비스 준비중입니다!');
  };

  return (
    <>
      <Button
        content="로그인하기"
        type="submit"
        styleOption={{
          height: '2.47rem',
          width: '17.5rem'
        }}
        onClick={onClick}
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
