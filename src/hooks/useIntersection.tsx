import { useCallback, useEffect, useRef } from 'react';
import {
  FetchPreviousPageOptions,
  UseInfiniteQueryResult
} from '@tanstack/react-query';

function useIntersection(
  nextPage: (
    options?: FetchPreviousPageOptions
  ) => Promise<UseInfiniteQueryResult>
) {
  const ref = useRef<HTMLDivElement>(null);

  const callback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach(async (entry) => {
        if (entry.isIntersecting) {
          nextPage();
        }
      });
    },
    [nextPage]
  );

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(callback, {
      threshold: 0
    });
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [callback]);

  return ref;
}

export default useIntersection;
