import { useMutation } from '@tanstack/react-query';
import { useSetAtom } from 'jotai';
import { postSignIn } from '@/api/member';
import {
  channelNameAtom,
  idAtom,
  isLoggedInAtom,
  tokenAtom
} from '@/store/auth';

export const useSignInMutation = () => {
  const setTokenState = useSetAtom(tokenAtom);
  const setIsLoggedIn = useSetAtom(isLoggedInAtom);
  const setIdState = useSetAtom(idAtom);
  const setNameState = useSetAtom(channelNameAtom);

  const signInMutation = useMutation({
    mutationFn: postSignIn,
    onSuccess: ({ token, user }) => {
      setTokenState(token);
      setIsLoggedIn(true);
      setIdState(user._id);
      setNameState(user.fullName);
    },
    onError: () => {
      setIsLoggedIn(false);
    }
  });

  return { mutateSignIn: signInMutation.mutate };
};
