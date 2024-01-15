import { useQuery } from '@tanstack/react-query';
import { getChannelList } from '@/api/channel';

const useGetChannelList = () => {
  return useQuery({
    queryKey: ['channelList'],
    queryFn: getChannelList
  });
};

export default useGetChannelList;
