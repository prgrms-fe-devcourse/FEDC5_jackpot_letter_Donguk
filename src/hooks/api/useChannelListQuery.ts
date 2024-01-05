import { useQuery } from '@tanstack/react-query';
import { getChannelList } from '@/api/channel';

const useChannelListQuery = () => {
  return useQuery({
    queryKey: ['channelList'],
    queryFn: getChannelList
  });
};

export default useChannelListQuery;
