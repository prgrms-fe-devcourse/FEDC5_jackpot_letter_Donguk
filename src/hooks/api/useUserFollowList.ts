import { useSuspenseQueries } from '@tanstack/react-query';
import { getUser } from '@/api/user';
import { Follow, FollowType, User } from '@/types/ResponseType';

function useUserFollowList(followList: Follow[], queryKey: string) {
  return useSuspenseQueries({
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
                userId: data._id,
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
        })
      };
    }
  });
}

export default useUserFollowList;
