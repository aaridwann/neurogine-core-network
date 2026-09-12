import { ReactNode } from "react";

import { QueryClient } from "@tanstack/react-query";

export interface NetworkProviderProps {
    children: ReactNode;
    client?: QueryClient;
}