import { useMutation } from '@tanstack/react-query';
import { createNotification } from '@/api/user';

export interface NewNotificationProps {
  notificationType: 'COMMENT' | 'FOLLOW' | 'LIKE' | 'MESSAGE';
  notificationTypeId: string;
  userId: string;
  postId: string | null;
}
export const useCreateNotification = () => {
  const mutation = useMutation({
    mutationFn: (notificationOption: NewNotificationProps) =>
      createNotification(notificationOption),
    onError: (e) => {
      console.log(e);
    }
  });

  return { mutate: mutation.mutate };
};
