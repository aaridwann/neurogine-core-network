import type { ReactNode } from 'react';

import type { QueryClient } from '@tanstack/react-query';

export interface NetworkProviderProps {
    children: ReactNode;
    client?: QueryClient;
}