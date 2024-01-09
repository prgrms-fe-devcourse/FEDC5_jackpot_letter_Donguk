import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import { deleteFollow } from '@/api/follow';
import { getStorage } from '@/utils/LocalStorage';

function useDeleteFollow() {
  const ACCESS_TOKEN = getStorage('ACCESS_TOKEN', '');

  return useMutation({
    mutationFn: async (id: string) => {
      console.log('id:', id);
      const res = await deleteFollow(id, {
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

export default useDeleteFollow;
