import { useQuery } from '@tanstack/react-query';
import { getUserList } from '@/api/member';

export const useUserListQuery = () => {
  return useQuery({
    queryKey: ['userList'],
    queryFn: getUserList
  });
};
