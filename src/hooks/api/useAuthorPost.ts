import { useSuspenseQuery } from '@tanstack/react-query';
import { getAuthorPost } from '@/api/post';
import { Post, UserPost } from '@/types/ResponseType';

function useAuthorPost(authorId: string) {
  return useSuspenseQuery({
    queryKey: ['authorPost', authorId] as const,
    queryFn: () => {
      return getAuthorPost(authorId);
    },
    select: (data: Post[]): UserPost[] => {
      const response = data.map((post) => {
        const { title, content } = JSON.parse(post.title);

        return {
          ...post,
          title,
          content,
          channelName: post.channel.name
        };
      });
      return response;
    },
    refetchOnMount: 'always'
  });
}

export default useAuthorPost;
