import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { getAuthorPost } from '@/api/post';
import { ACCESS_USER_ID } from '@/constants/api';
import { Post, UserPost } from '@/types/ResponseType';
import { getStorage } from '@/utils/LocalStorage';

interface PostDatas {
  pages: Post[][];
  pageParams: number[];
}

function useAuthorPost(COUNT: number) {
  const userId = getStorage(ACCESS_USER_ID, '');

  return useSuspenseInfiniteQuery({
    queryKey: ['infiniteAuthorPost', userId, COUNT],
    queryFn: getAuthorPost,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (allPages[allPages.length - 1].length !== 0) {
        return allPages.length + 1;
      }
    },
    select: (data: PostDatas): UserPost[] => {
      const pages = ([] as Post[]).concat(...data.pages);
      const response = pages.map((post) => {
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
