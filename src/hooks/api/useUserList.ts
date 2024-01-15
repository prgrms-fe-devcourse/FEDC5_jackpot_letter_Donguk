import { useQuery } from '@tanstack/react-query';
import { getUserList } from '@/api/user';

export const useUserList = () => {
  return useQuery({
    queryKey: ['userList'],
    queryFn: getUserList
  });
};
