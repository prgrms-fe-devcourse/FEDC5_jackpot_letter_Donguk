import { useQuery } from '@tanstack/react-query';
import { getUserOnline } from '@/api/user';

export const useUserOnline = () => {
  return useQuery({
    queryKey: ['userOnline'],
    queryFn: getUserOnline
    // staleTime: 1000,
    // gcTime: 1000,
    // refetchInterval: 1000
  });
};
