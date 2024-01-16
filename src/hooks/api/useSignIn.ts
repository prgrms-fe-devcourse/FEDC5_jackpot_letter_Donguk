import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSetAtom } from 'jotai';
import { signIn } from '@/api/auth';
import { ErrorResponseData } from '@/api/axiosInstance';
import {
  channelNameAtom,
  idAtom,
  isLoggedInAtom,
  tokenAtom
} from '@/store/auth';

export const useSignIn = () => {
  const setTokenState = useSetAtom(tokenAtom);
  const setIsLoggedIn = useSetAtom(isLoggedInAtom);
  const setIdState = useSetAtom(idAtom);
  const setNameState = useSetAtom(channelNameAtom);

  const queryClient = useQueryClient();

  const signInMutation = useMutation({
    mutationFn: signIn,
    onSuccess: ({ user, token }) => {
      const { _id, fullName } = user;

      setTokenState(token);
      setIdState(_id);
      setNameState(fullName);

      if (_id === import.meta.env.VITE_ANONYMOUS_ID_KEY) {
        setIsLoggedIn(false);
        toast.success('익명 사용자입니git 다');
      } else {
        setIsLoggedIn(true);
        toast.success('로그인 성공');
      }

      queryClient.invalidateQueries({ queryKey: ['userOnline'] });
    },
    onError: (error: ErrorResponseData) => {
      if (error.message) {
        toast.error(error.message);
      } else {
        toast.error('로그인 실패');
      }
    }
  });

  return { mutateSignIn: signInMutation.mutate };
};
