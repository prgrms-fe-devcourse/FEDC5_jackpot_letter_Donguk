import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { getInfiniteChannelPost } from '@/api/post';
import { ACCESS_CHANNEL_NAME } from '@/constants/api';
import { Post, UserPost } from '@/types/ResponseType';
import { getStorage } from '@/utils/LocalStorage';
import useGetChannelInfo from './useGetChannelInfo';

interface PostDatas {
  pages: Post[][];
  pageParams: number[];
}

function useChannelPost() {
  const channelName = getStorage(ACCESS_CHANNEL_NAME, '');

  const { data: channel } = useGetChannelInfo(channelName ?? '');

  const channelId = channel?._id;
  const COUNT = 8;

  return useSuspenseInfiniteQuery({
    queryKey: ['infiniteChannelPost', channelId, COUNT],
    queryFn: getInfiniteChannelPost,
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
          channelName
        };
      });
      return response;
    },
    staleTime: Infinity
  });
}

export default useChannelPost;
