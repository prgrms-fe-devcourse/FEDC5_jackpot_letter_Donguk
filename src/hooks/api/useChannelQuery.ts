import { useQuery } from '@tanstack/react-query';
import { getChannel } from '@/api/channel';

const useChannelQuery = (channelName: string) => {
  return useQuery({
    queryKey: ['channel', channelName],
    queryFn: () => getChannel(channelName)
  });
};

export default useChannelQuery;
