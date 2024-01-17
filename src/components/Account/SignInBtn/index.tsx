import { useNavigate } from 'react-router-dom';
import Button from '@/components/Common/Button';
import { useSignIn } from '@/hooks/api/useSignIn';
import { PATH } from '@/constants/path';

interface ButtonType {
  onClick?: () => void;
}
function SignInBtn({ onClick }: ButtonType) {
  const navigate = useNavigate();
  const { mutateSignIn } = useSignIn();

  const startAnonymousExperience = () => {
    mutateSignIn({
      email: import.meta.env.VITE_ANONYMOUS_EMAIL_KEY,
      password: import.meta.env.VITE_ANONYMOUS_PASSWORD_KEY
    });

    navigate(PATH.ROOT);
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
