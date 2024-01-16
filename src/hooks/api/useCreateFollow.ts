import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createFollow } from '@/api/follow';
import { useCreateNotification } from './useCreateNotification';

function useCreateFollow() {
  const queryClient = useQueryClient();
  const { mutate: notificationMutate } = useCreateNotification();

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
      queryClient.invalidateQueries({ queryKey: ['user'] });
      toast.success('성공적으로 변경됐습니다.');
      notificationMutate({
        notificationType: 'FOLLOW',
        notificationTypeId: data._id,
        userId: data.user,
        postId: null
      });
    }
  });
}

export default useCreateFollow;
