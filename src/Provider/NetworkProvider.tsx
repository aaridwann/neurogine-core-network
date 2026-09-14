import React, { type ReactNode } from 'react';

import { QueryClientProvider, type QueryClient } from '@tanstack/react-query';

import { sharedQueryClient } from '../query/queryClient';

export const NetworkProvider: React.FC<{ children: ReactNode, client?: QueryClient }> = ({
  children,
  client = sharedQueryClient,
}) => {
  return (
    <QueryClientProvider client={client}>
      {children}
    </QueryClientProvider>
  );
};