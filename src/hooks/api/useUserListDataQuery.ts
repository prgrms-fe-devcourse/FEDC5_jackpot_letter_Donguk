import { useQuery } from '@tanstack/react-query';
import { getUserList } from '@/api/user';

export const useUserListQuery = () => {
  return useQuery({
    queryKey: ['userListData'] as const,
    queryFn: getUserList
  });
};
