import { jsx as _jsx } from "react/jsx-runtime";
import { QueryClientProvider } from '@tanstack/react-query';
import { sharedQueryClient } from '../query/queryClient';
export const NetworkProvider = ({ children, client = sharedQueryClient, }) => {
    return (_jsx(QueryClientProvider, { client: client, children: children }));
};
