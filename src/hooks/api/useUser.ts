import { useQuery } from '@tanstack/react-query';
import { getUser } from '@/api/user';

function useUser(userId: string) {
  return useQuery({
    queryKey: ['user', userId] as const,
    queryFn: async () => {
      return await getUser(userId);
    }
  });
}

export default useUser;
