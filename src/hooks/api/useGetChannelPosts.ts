import { useQuery } from '@tanstack/react-query';
import { getChannelPost } from '@/api/post';

const useGetChannelPosts = (channelId: string) => {
  return useQuery({
    queryKey: ['channelPosts', channelId],
    queryFn: () => getChannelPost(channelId)
  });
};

export default useGetChannelPosts;
