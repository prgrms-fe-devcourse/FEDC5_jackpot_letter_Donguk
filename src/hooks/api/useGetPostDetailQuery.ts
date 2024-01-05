import { useQuery } from '@tanstack/react-query';
import { getPostDetail } from '@/api/post';

export const useGetPostDetailQuery = (id: string) => {
  return useQuery({
    queryKey: ['postDetail', id],
    queryFn: () => getPostDetail(id)
  });
};
