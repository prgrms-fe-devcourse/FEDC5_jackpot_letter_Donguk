import { useQuery } from '@tanstack/react-query';
import { getConfirmAuth } from '@/api/member';

export const useConfirmAuthQuery = () => {
  return useQuery({
    queryKey: ['confirmAuth'],
    queryFn: getConfirmAuth
  });
};
