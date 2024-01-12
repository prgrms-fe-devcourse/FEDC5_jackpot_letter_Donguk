import { useQuery } from '@tanstack/react-query';
import { getChennelInfo } from '@/api/channel';

const useChannelQuery = (channelName: string) => {
  return useQuery({
    queryKey: ['channel', channelName],
    queryFn: () => getChennelInfo(channelName)
  });
};

export default useChannelQuery;
