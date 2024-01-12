import { useQuery } from '@tanstack/react-query';
import { getMessages } from '@/api/message';

/** 특정 사용자와 소통한 메시지 목록 */
export const useGetMessagesQuery = (JWTtoken: string, receiverId: string) => {
  return useQuery({
    queryKey: ['messageList', receiverId],
    queryFn: () => getMessages(JWTtoken, receiverId),
    enabled: !!receiverId
  });
};
