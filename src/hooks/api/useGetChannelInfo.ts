import { useQuery } from '@tanstack/react-query';
import { getChannelInfo } from '@/api/channel';

const useGetChannelInfo = (channelName: string) => {
  return useQuery({
    queryKey: ['channel', channelName],
    queryFn: () => getChannelInfo(channelName)
  });
};

export default useGetChannelInfo;
