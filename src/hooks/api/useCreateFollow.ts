import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import { createFollow } from '@/api/follow';
import { getStorage } from '@/utils/LocalStorage';

function useCreateFollow() {
  const ACCESS_TOKEN = getStorage('ACCESS_TOKEN', '');

  return useMutation({
    mutationFn: async (userId: string) => {
      const res = await createFollow(userId, {
        Authorization: `Bearer ${ACCESS_TOKEN}`
      });
      return res;
    },
    onError: (context) => {
      console.log(context);
      toast.error('변경에 실패했습니다.');
    },
    onSuccess: (data) => {
      console.log(data);
      toast.success('성공적으로 변경됐습니다.');
    }
  });
}

export default useCreateFollow;
