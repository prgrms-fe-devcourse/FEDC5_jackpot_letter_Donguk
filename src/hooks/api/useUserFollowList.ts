import { useQueries } from '@tanstack/react-query';
import { getUser } from '@/api/user';
import { Follow, FollowType, User } from '@/types/ResponseType';

function useUserFollowList(followList: Follow[], queryKey: string) {
  return useQueries({
    queries: followList
      ? followList.map((follow) => {
          return {
            queryKey: [queryKey, follow.user] as const,
            queryFn: () => {
              return getUser(follow.user);
            },
            select: (data: User): FollowType => {
              const response = {
                ...follow,
                name: data.fullName,
                image: data.image
              };
              return response;
            },
            staleTime: Infinity
          };
        })
      : [],
    combine: (results) => {
      return {
        data: results.map((result) => {
          return result.data;
        }),
        pending: results.some((result) => {
          return result.isPending;
        })
      };
    }
  });
}

export default useUserFollowList;
