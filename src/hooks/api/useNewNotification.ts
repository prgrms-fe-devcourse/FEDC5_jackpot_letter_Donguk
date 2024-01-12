import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import { createNotification } from '@/api/user';

export interface NewNotificationProps {
  notificationType: 'COMMENT' | 'FOLLOW' | 'LIKE' | 'MESSAGE';
  notificationTypeId: string;
  userId: string;
  postId: string | null | undefined;
}

export const useNewNotification = () => {
  const createNotificatioMutation = useMutation({
    mutationFn: (notificationOption: NewNotificationProps) =>
      createNotification(notificationOption),
    onError: () => {
      toast.error('알림 전송에 실패하였습니다');
    }
  });

  return { mutateNewNotification: createNotificatioMutation.mutate };
};
