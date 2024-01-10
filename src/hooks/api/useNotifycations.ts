import { useQuery } from '@tanstack/react-query';
import { getNotifications } from './../../api/user';

function useNotifycations() {
  return useQuery({
    queryKey: ['notifycaitons'] as const,
    queryFn: getNotifications
  });
}

export default useNotifycations;
