import { useMutation } from '@tanstack/react-query';
import { useSetAtom } from 'jotai';
import { postSignIn } from '@/api/member/postSignIn';
import { isLoggedInAtom, tokenAtom } from '@/store/auth';

export const useSignInMutation = () => {
  const setTokenState = useSetAtom(tokenAtom);
  const setIsLoggedIn = useSetAtom(isLoggedInAtom);

  const signInMutation = useMutation({
    mutationFn: postSignIn,
    onSuccess: ({ token }) => {
      setTokenState(token);
      setIsLoggedIn(true);
    },
    onError: () => {
      setIsLoggedIn(false);
    }
  });

  return { mutateSignIn: signInMutation.mutate };
};
