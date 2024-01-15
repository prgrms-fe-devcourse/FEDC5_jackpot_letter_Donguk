import { useQuery } from '@tanstack/react-query';
import { getNotifications } from './../../api/user';

const useGetNotifications = () => {
  return useQuery({
    queryKey: ['notifycaitons'] as const,
    queryFn: getNotifications
  });
};
export default useGetNotifications;
