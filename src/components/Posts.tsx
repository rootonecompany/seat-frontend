"use client";

import { useDeletePost, useGetPosts } from "@/hooks/useApi";
import styled from "styled-components";

export default function Posts() {
    const { data } = useGetPosts();

    const deletePostMutation = useDeletePost();

    const handleDeletePost = async (id: number) => {
        await deletePostMutation.mutateAsync(id);
    };

    return (
        <Block>
            <div>
                <h2>ssr 적용</h2>
                <ul>
                    {data?.map((post) => (
                        <li
                            key={post.id}
                            onClick={() => handleDeletePost(post.id)}
                        >
                            {post.title}
                        </li>
                    ))}
                </ul>
            </div>
        </Block>
    );
}

const Block = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`;
