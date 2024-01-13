import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateNotification } from '@/api/user';

// export interface NewNotificationProps {
//   notificationType: 'COMMENT' | 'FOLLOW' | 'LIKE' | 'MESSAGE';
//   notificationTypeId: string | undefined;
//   userId: string;
//   postId: string | null;
// }

/** 나에게 온 알림 읽음 처리 */
export const useNotificationSeen = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateNotification,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notifycaitons'] });
    },
    onError: () => {
      toast.error('읽음 처리를 실패하였습니다');
    }
  });
};
