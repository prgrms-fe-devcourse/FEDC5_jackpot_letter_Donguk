import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import { useSetAtom } from 'jotai';
import { ErrorResponseData } from '@/api/axiosInstance';
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
    onSuccess: ({ user, token }) => {
      const { _id, fullName } = user;

      setTokenState(token);
      setIdState(_id);
      setNameState(fullName);

      setIsLoggedIn(true);
      toast.success('로그인 성공');
    },
    onError: (error: ErrorResponseData) => {
      if (error.customMessage) {
        toast.error(error.customMessage);
      }
      setIsLoggedIn(false);
      toast.error('로그인 실패');
    }
  });

  return { mutateSignIn: signInMutation.mutate };
};
