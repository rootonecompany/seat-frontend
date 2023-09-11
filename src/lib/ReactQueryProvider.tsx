"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

interface ReactQueryProviderProps {
    children: React.ReactNode;
}

export default function ReactQueryProvider({
    children,
}: ReactQueryProviderProps) {
    const [client] = useState(
        new QueryClient({
            defaultOptions: {
                queries: {
                    refetchOnWindowFocus: false,
                    retry: false,
                },
            },
        })
    );

    return (
        <QueryClientProvider client={client}>{children}</QueryClientProvider>
    );
}
