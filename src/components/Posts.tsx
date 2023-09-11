"use client";

import { useQuery } from "@tanstack/react-query";
import { getPosts } from "@/apis/api/posts/getPosts";
import styled from "styled-components";

export default function Posts() {
    const { data } = useQuery({ queryKey: ["posts"], queryFn: getPosts });

    const { data: otherData } = useQuery({
        queryKey: ["no-ssr"],
        queryFn: getPosts,
    });

    return (
        <Block>
            <div>
                <h2>ssr 적용</h2>
                <ul>
                    {data?.map((post) => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>ssr 미적용</h2>
                <ul>
                    {otherData?.map((post) => (
                        <li key={post.id}>{post.title}</li>
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
