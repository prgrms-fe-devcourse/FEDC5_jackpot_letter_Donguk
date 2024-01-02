import { useQuery } from '@tanstack/react-query';
import { getChannelList } from '@/api/channel';

const useGetChannelListQuery = () => {
  return useQuery({
    queryKey: ['channelList'],
    queryFn: getChannelList
  });
};

export default useGetChannelListQuery;
