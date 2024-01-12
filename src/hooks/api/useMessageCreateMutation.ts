import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postMessagesCreate } from '@/api/message';

interface mutationProps {
  JWTtoken: string;
  receiver: string;
  message: string;
}

/** 특정 사용자에게 메시지(DM) 전달*/
export const useMessageCreateMutation = (receiverId: string) => {
  const queryClient = useQueryClient();

  const messageCreateMutation = useMutation({
    mutationFn: ({ receiver, message }: mutationProps) =>
      postMessagesCreate(message, receiver),
    onSuccess: () => {
      toast.success('메세지 전송에 성공했습니다.');
      queryClient.invalidateQueries({ queryKey: ['messageList', receiverId] });
    },
    onError: () => toast.error('메시지 전송에 실패하였습니다.')
  });

  return { mutationMessageCreate: messageCreateMutation.mutate };
};
