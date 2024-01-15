import { useQuery } from '@tanstack/react-query';
import { getUser } from '@/api/user';

function useUser(userId: string) {
  return useQuery({
    queryKey: ['user', userId] as const,
    queryFn: () => {
      return getUser(userId);
    }
  });
}

export default useUser;
