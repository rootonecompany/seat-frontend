"use client";

import { useGetPost } from "@/hooks/useApi";

export default function PostDetail({ id }: { id: number }) {
    const { data } = useGetPost(id);
    return (
        <div>
            <h1>{data?.title}</h1>
            <span>{data?.body}</span>
        </div>
    );
}
