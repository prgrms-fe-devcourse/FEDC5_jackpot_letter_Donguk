import { useQuery } from '@tanstack/react-query';
import { getSearchResult } from '@/api/channel';

const useSearch = (keyword: string, option: 'users' | 'all') => {
  return useQuery({
    queryKey: ['search', keyword, option],
    queryFn: () => getSearchResult(keyword, option)
  });
};

export default useSearch;
