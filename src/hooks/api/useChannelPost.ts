import { useQuery } from '@tanstack/react-query';
import { getChannelPost } from '@/api/post';
import { ACCESS_CHANNEL_NAME } from '@/constants/api';
import { Post, UserPost } from '@/types/ResponseType';
import { getStorage } from '@/utils/LocalStorage';
import useChannelQuery from './useChannelQuery';

function useChannelPost() {
  const channelName = getStorage(ACCESS_CHANNEL_NAME, '');

  const { data: channel } = useChannelQuery(channelName ?? '');

  const channelId = channel?._id;

  // channelId 종속 쿼리
  return useQuery({
    queryKey: ['channelPost', channelId] as const,
    queryFn: () => {
      return getChannelPost(channelId);
    },
    select: (data: Post[]): UserPost[] => {
      const response = data.map((post) => {
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
    staleTime: Infinity,
    enabled: !!channelId
  });
}

export default useChannelPost;
