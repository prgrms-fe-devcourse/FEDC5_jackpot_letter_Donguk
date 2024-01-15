import { useQueries } from '@tanstack/react-query';
import { getMessages } from '@/api/message';
import { AuthenticationUser } from '@/types/ResponseType';

/** 특정 사용자와 소통 메시지 목록을 통해 읽지 않은 메시지 개수 계산 */
export const useListOfSpecificMessages = (
  userList: AuthenticationUser[] | undefined
) => {
  return useQueries({
    queries: userList
      ? userList.map(({ _id }) => ({
          queryKey: ['specificMessage', _id],
          queryFn: () => getMessages(_id)
        }))
      : [],
    combine: (results) => {
      return results.map(({ data }) => data);
    }
  });
};
