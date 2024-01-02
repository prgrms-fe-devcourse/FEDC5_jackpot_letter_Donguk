import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface usePostQueryProps<T> {
  key: string;
  query: T;
}

const usePostQuery = <T,>({ key, query }: usePostQueryProps<T>) => {
  return useQuery<T>({
    queryKey: [key],
    queryFn: async () => {
      return await axios.post('/api/post', {
        ...query
      });
    }
  });
};

export default usePostQuery;
