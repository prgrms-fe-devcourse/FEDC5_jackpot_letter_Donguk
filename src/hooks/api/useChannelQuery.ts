import { useSuspenseQuery } from '@tanstack/react-query';
import { getChannelInfo } from '@/api/channel';

const useChannelQuery = (channelName: string) => {
  return useSuspenseQuery({
    queryKey: ['channel', channelName],
    queryFn: () => getChannelInfo(channelName)
  });
};

export default useChannelQuery;
