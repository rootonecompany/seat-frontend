"use client";

import {
    QueryCache,
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query";
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
            queryCache: new QueryCache({
                onError: (error) => {
                    console.log("에러명 : ", error);
                },
            }),
        })
    );

    return (
        <QueryClientProvider client={client}>{children}</QueryClientProvider>
    );
}
