import { useQueries } from '@tanstack/react-query';
import { getPost } from '@/api/post';
import { Post, User, UserPost } from '@/types/ResponseType';

function useUserLikeList(userData: User) {
  return useQueries({
    queries: userData
      ? userData.likes.map((like) => {
          return {
            queryKey: ['post', like.post] as const,
            queryFn: () => {
              return getPost(like.post);
            },
            select: (data: Post): UserPost => {
              const response = {
                ...data,
                _id: like._id,
                channelName: data.channel.name
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

export default useUserLikeList;
