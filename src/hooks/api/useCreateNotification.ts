import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createNotification } from '@/api/user';

export interface NewNotificationProps {
  notificationType: 'COMMENT' | 'FOLLOW' | 'LIKE' | 'MESSAGE';
  notificationTypeId: string | undefined;
  userId: string;
  postId: string | null;
}

export const useNewNotification = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (notificationOption: NewNotificationProps) =>
      createNotification(notificationOption),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userListData'] });
    },
    onError: () => {
      toast.error('알림 전송에 실패하였습니다');
    }
  });
};
