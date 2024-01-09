import { useQuery } from '@tanstack/react-query';
import { getUserInfomation } from '@/api/member';

export const useUserInfomationQuery = (userId: string) => {
  return useQuery({
    queryKey: [userId],
    queryFn: () => getUserInfomation(userId)
  });
};
