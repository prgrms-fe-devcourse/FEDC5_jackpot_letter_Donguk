import { useQuery } from '@tanstack/react-query';
import { getPostDetail } from '@/api/post';

/** 특정 포스트 상세 보기 */
export const useGetPostDetailQuery = (id: string) => {
  return useQuery({
    queryKey: ['postDetail', id],
    queryFn: () => getPostDetail(id),
    enabled: !!id
  });
};
