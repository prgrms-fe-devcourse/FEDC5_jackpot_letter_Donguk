import { useQuery } from '@tanstack/react-query';
import { getChannelPosts } from '@/api/post';

const useChannelPostsQuery = (channelId: string) => {
  return useQuery({
    queryKey: ['channelPosts', channelId],
    queryFn: () => getChannelPosts(channelId)
  });
};

export default useChannelPostsQuery;
