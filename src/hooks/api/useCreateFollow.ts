import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createFollow } from '@/api/follow';

function useCreateFollow() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (userId: string) => {
      const res = await createFollow(userId);
      return res;
    },
    onError: (context) => {
      console.log(context);
      toast.error('변경에 실패했습니다.');
    },
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries({ queryKey: ['user'] });
      toast.success('성공적으로 변경됐습니다.');
    }
  });
}

export default useCreateFollow;
