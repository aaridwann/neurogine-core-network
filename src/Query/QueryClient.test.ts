import { QueryClient } from '@tanstack/react-query';

import { createQueryClient, sharedQueryClient } from './QueryClient';

describe('QueryClient Module', () => {
    describe('createQueryClient', () => {
        it('should create a QueryClient instance with default options', () => {
            const client = createQueryClient();

            expect(client).toBeInstanceOf(QueryClient);

            const defaultQueryOptions = client.getDefaultOptions().queries;
            const defaultMutationOptions = client.getDefaultOptions().mutations;

            expect(defaultQueryOptions?.staleTime).toBe(1000 * 60 * 5);
            expect(defaultQueryOptions?.gcTime).toBe(1000 * 60 * 30);
            expect(defaultQueryOptions?.retry).toBe(2);
            expect(defaultQueryOptions?.refetchOnWindowFocus).toBe(false);
            expect(defaultQueryOptions?.refetchOnReconnect).toBe(true);

            expect(defaultMutationOptions?.retry).toBe(0);
        });

        it('should override default options when customConfig is provided', () => {
            const customConfig = {
                defaultOptions: {
                    queries: {
                        staleTime: 5000,
                        retry: 5,
                    },
                    mutations: {
                        retry: 3,
                    },
                },
            };

            const client = createQueryClient(customConfig);
            const defaultQueryOptions = client.getDefaultOptions().queries;
            const defaultMutationOptions = client.getDefaultOptions().mutations;

            expect(defaultQueryOptions?.staleTime).toBe(5000);
            expect(defaultQueryOptions?.retry).toBe(5);
            expect(defaultMutationOptions?.retry).toBe(3);
        });
    });

    describe('sharedQueryClient', () => {
        it('should be an instance of QueryClient', () => {
            expect(sharedQueryClient).toBeInstanceOf(QueryClient);
        });
    });
});