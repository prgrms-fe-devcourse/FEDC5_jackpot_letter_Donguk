import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import { useSetAtom } from 'jotai';
import { ErrorResponseData } from '@/api/axiosInstance';
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
      const { _id, fullName } = user;

      setTokenState(token);
      setIdState(_id);
      setNameState(fullName);

      setIsLoggedIn(true);

      toast.success('회원가입 성공');
    },
    onError: (error: ErrorResponseData) => {
      if (error.customMessage) {
        toast.error(error.customMessage);
      }
      setIsLoggedIn(false);
    }
  });

  return { mutateSignUp: signUpMutation.mutate };
};
