import { useSuspenseQuery } from '@tanstack/react-query';
import { getChannel } from '@/api/channel';

const useChannelQuery = (channelName: string) => {
  return useSuspenseQuery({
    queryKey: ['channel', channelName],
    queryFn: () => getChannel(channelName)
  });
};

export default useChannelQuery;
