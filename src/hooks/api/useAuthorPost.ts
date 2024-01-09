import { useQuery } from '@tanstack/react-query';
import { getAuthorPost } from '@/api/post';
import { Post, UserPost } from '@/types/ResponseType';

function useAuthorPost(authorId: string) {
  return useQuery({
    queryKey: ['authorPost', authorId] as const,
    queryFn: () => {
      return getAuthorPost(authorId);
    },
    select: (data: Post[]): UserPost[] => {
      const response = data.map((post) => {
        return {
          ...post,
          channelName: post.channel.name
        };
      });
      return response;
    },
    staleTime: Infinity
  });
}

export default useAuthorPost;
