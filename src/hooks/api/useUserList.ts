import { useQuery } from '@tanstack/react-query';
import { getUserList } from '@/api/user';

export const useUserList = () => {
  return useQuery({
    queryKey: ['userList'],
    queryFn: getUserList,
    staleTime: 1000,
    gcTime: 1000,
    refetchInterval: 1000
  });
};
