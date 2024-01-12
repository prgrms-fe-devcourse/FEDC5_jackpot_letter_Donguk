import { toast } from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import { checkNotifications } from '@/api/user';

export const useCheckNotifications = () => {
  const mutation = useMutation({
    mutationFn: checkNotifications,
    onSuccess: () => {
      toast.success('알람을 모두 읽음처리에 성공했습니다.');
    },
    onError: (e) => {
      console.log(e);
    }
  });

  return { mutate: mutation.mutate };
};
