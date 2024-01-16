import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSetAtom } from 'jotai';
import { signOut } from '@/api/auth';
import {
  ACCESS_CHANNEL_NAME,
  ACCESS_TOKEN_KEY,
  ACCESS_USER_ID
} from '@/constants/api';
import { isLoggedInAtom, tokenAtom } from '@/store/auth';
import { removeStorage } from '@/utils/LocalStorage';

export const useSignOut = () => {
  const setTokenState = useSetAtom(tokenAtom);
  const setIsLoggedIn = useSetAtom(isLoggedInAtom);
  const queryClient = useQueryClient();

  const signOutMutation = useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      removeStorage(ACCESS_TOKEN_KEY);
      removeStorage(ACCESS_CHANNEL_NAME);
      removeStorage(ACCESS_USER_ID);

      setTokenState('');
      setIsLoggedIn(false);
      toast.success('로그아웃 성공');
      location.reload();

      queryClient.invalidateQueries({ queryKey: ['userList'] });
    },
    onError: () => {
      toast.error('잠시후 다시 이용해주세요');
    }
  });

  return { mutateSignOut: signOutMutation.mutate };
};
