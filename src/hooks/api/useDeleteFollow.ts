import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteFollow } from '@/api/follow';

function useDeleteFollow() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const res = await deleteFollow(id);
      return res;
    },
    onError: (context) => {
      console.log(context);
      toast.error('변경에 실패했습니다.');
    },
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries({ queryKey: ['user'] });
      toast.success('팔로우가 취소됐습니다.');
    }
  });
}

export default useDeleteFollow;
