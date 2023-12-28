import { useQuery } from '@tanstack/react-query';

export function useRequestData(key, queryFunction, options = {}) {
  const { isPending, error, data } = useQuery({
    queryKey: [key],
    queryFn: async () => await queryFunction(),
    ...options
  });

  return { isPending, error, data };
}
