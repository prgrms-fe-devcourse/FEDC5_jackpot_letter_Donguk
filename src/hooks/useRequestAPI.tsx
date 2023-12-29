import { useQuery } from '@tanstack/react-query';

interface useQueryProps {
  key: string;
  queryFunction: () => Promise<void | { [key: string]: unknown }>;
  options?: {
    [key: string]: string;
  };
}

/** TanStack useQuery */
export function useRequestAPI() {
  const useRequestQuery = ({
    key,
    queryFunction,
    options = {}
  }: useQueryProps) =>
    useQuery({
      queryKey: [key],
      queryFn: queryFunction,
      ...options
    });

  return { useRequestQuery };
}
