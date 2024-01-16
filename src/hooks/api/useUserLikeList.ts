import { useSuspenseQueries } from '@tanstack/react-query';
import { getPostDetail } from '@/api/post';
import { Post, User, UserPost } from '@/types/ResponseType';

function useUserLikeList(userData: User) {
  return useSuspenseQueries({
    queries: userData
      ? userData.likes.map((like) => {
          return {
            queryKey: ['post', like.post] as const,
            queryFn: () => {
              return getPostDetail(like.post);
            },
            select: (data: Post): UserPost => {
              const { title, content } = JSON.parse(data.title);
              const response = {
                ...data,
                _id: like._id,
                postId: like.post,
                title,
                content,
                channelName: data.channel.name
              };
              console.log(response);

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
