import { useMutation } from '@tanstack/react-query';
import { createNotifications } from '@/api/user';

export interface NewNotificationProps {
  notificationType: 'COMMENT' | 'FOLLOW' | 'LIKE' | 'MESSAGE';
  notificationTypeId: string;
  userId: string;
  postId: string | null;
}

export const useNewNotification = () => {
  const createNotificatioMutation = useMutation({
    mutationFn: (notificationOption: NewNotificationProps) =>
      createNotifications(notificationOption),
    onError: (e) => {
      console.log(e);
    }
  });

  return { mutateNewNotification: createNotificatioMutation.mutate };
};
