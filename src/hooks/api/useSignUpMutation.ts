import { useMutation } from '@tanstack/react-query';
import { useSetAtom } from 'jotai';
import { postSignUp } from '@/api/member';
import {
  channelNameAtom,
  idAtom,
  isLoggedInAtom,
  tokenAtom
} from '@/store/auth';

export const useSignUpMutation = () => {
  const setTokenState = useSetAtom(tokenAtom);
  const setIsLoggedIn = useSetAtom(isLoggedInAtom);
  const setIdState = useSetAtom(idAtom);
  const setNameState = useSetAtom(channelNameAtom);

  const signUpMutation = useMutation({
    mutationFn: postSignUp,
    onSuccess: ({ token, user }) => {
      setTokenState(token);
      setIdState(user._id);
      setNameState(user.fullName);
      setIsLoggedIn(true);
    },
    onError: () => {
      setIsLoggedIn(false);
    }
  });

  return { mutateSignUp: signUpMutation.mutate };
};
