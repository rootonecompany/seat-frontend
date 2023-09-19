"use client";

import { useGetPosts } from "@/hooks/useApi";
import Link from "next/link";
import styled from "styled-components";

export default function Posts() {
    const { data } = useGetPosts();

    return (
        <Block>
            <LinkBlock>
                {data?.map((post) => (
                    <Link key={post.id} href={`/posts/${post.id}`}>
                        {post.id} - {post.title}
                    </Link>
                ))}
            </LinkBlock>
        </Block>
    );
}

const Block = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`;
const LinkBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    a {
        color: black;
        text-decoration: none;
        font-size: 1rem;
    }
`;
