import { useQuery } from '@tanstack/react-query';
import { getMessageConversations } from '@/api/message';

/** 나의 메시지함(소통한 유저 목록) 가져오기 */
export const useGetMessageConversations = () => {
  return useQuery({
    queryKey: ['MessagesData'] as const,
    queryFn: getMessageConversations
  });
};
