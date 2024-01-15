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
    mutationFn: ({ JWTtoken, receiver, message }: mutationProps) =>
      postMessagesCreate(JWTtoken, message, receiver),
    onSuccess: () => {
      console.log('메시지가 정상적으로 전달되었습니다');
      queryClient.invalidateQueries({ queryKey: ['messageList', receiverId] });
    },
    onError: () => console.log('메시지 전송에 실패하였습니다')
  });

  return { mutationMessageCreate: messageCreateMutation.mutate };
};
