import React, { ReactNode } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

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