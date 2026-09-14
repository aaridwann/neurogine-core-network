import { QueryClient, type QueryClientConfig } from '@tanstack/react-query';

export const createQueryClient = (customConfig?: QueryClientConfig): QueryClient => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        /**
                 * Todo need move to configs env for parameterize
                 */
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 30,
        retry: 2,
        refetchOnWindowFocus: false,
        refetchOnReconnect: true,
      },
      mutations: {
        retry: 0,
      },
      ...customConfig?.defaultOptions,
    },
    ...customConfig,
  });
};

export const sharedQueryClient = createQueryClient();