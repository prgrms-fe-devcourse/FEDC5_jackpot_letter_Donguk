import { useMutation } from '@tanstack/react-query';
import { useSetAtom } from 'jotai';
import { postSignUp } from '@/api/member/postSignUp';
import { isLoggedInAtom, tokenAtom } from '@/store/auth';

export const useSignUpMutation = () => {
  const setTokenState = useSetAtom(tokenAtom);
  const setIsLoggedIn = useSetAtom(isLoggedInAtom);

  const signUpMutation = useMutation({
    mutationFn: postSignUp,
    onSuccess: ({ token }) => {
      setTokenState(token);
      setIsLoggedIn(true);
    },
    onError: () => {
      setIsLoggedIn(false);
    }
  });

  return { mutateSignUp: signUpMutation.mutate };
};
