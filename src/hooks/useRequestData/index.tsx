import { useQuery } from '@tanstack/react-query';

interface useQueryProps {
  key: string;
  queryFunction: () => Promise<string>;
  options?: {
    [key: string]: string;
  };
}

/** TanStack useQuery */
export function useRequestData() {
  const query = ({ key, queryFunction, options = {} }: useQueryProps) =>
    useQuery({
      queryKey: [key],
      queryFn: queryFunction,
      ...options
    });

  return { query };
}
