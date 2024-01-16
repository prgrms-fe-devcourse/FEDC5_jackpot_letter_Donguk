import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import { useSetAtom } from 'jotai';
import { signUp } from '@/api/auth';
import { ErrorResponseData } from '@/api/axiosInstance';
import {
  channelNameAtom,
  idAtom,
  isLoggedInAtom,
  tokenAtom
} from '@/store/auth';

export const useSignUp = () => {
  const setTokenState = useSetAtom(tokenAtom);
  const setIsLoggedIn = useSetAtom(isLoggedInAtom);
  const setIdState = useSetAtom(idAtom);
  const setNameState = useSetAtom(channelNameAtom);

  const signUpMutation = useMutation({
    mutationFn: signUp,
    onSuccess: ({ token, user }) => {
      const { _id, fullName } = user;

      setTokenState(token);
      setIdState(_id);
      setNameState(fullName);

      setIsLoggedIn(true);

      toast.success('회원가입 성공');
    },
    onError: (error: ErrorResponseData) => {
      if (error.message) {
        toast.error(error.message);
      }
      setIsLoggedIn(false);
    }
  });

  return { mutateSignUp: signUpMutation.mutate };
};
