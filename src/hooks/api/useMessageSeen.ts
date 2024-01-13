import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { putMessageUpdateSeen } from '@/api/message';

/** 메시지 확인 처리 */
export const useMessageSeen = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (senderId: string) => putMessageUpdateSeen(senderId),
    onSuccess: () => {
      toast.success(`메세지 읽음 처리 성공`);
      queryClient.invalidateQueries({ queryKey: ['notifycaitons'] });
    },
    onError: () => {
      toast.error('메세지 읽음 처리를 실패하였습니다');
    }
  });
};
