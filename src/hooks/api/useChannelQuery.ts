import { useQuery } from '@tanstack/react-query';
import { getChannel } from '@/api/channel';

const useChannelQuery = (channelId: string) => {
  return useQuery({
    queryKey: ['channel', channelId],
    queryFn: () => getChannel(channelId)
  });
};

export default useChannelQuery;
