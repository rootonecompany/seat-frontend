"use client";

import { useGetPosts, useCreatePost } from "@/hooks/useApi";
import { Post } from "@/interface";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import styled from "styled-components";

export default function Posts() {
    const { data } = useGetPosts();

    const [posts, setPosts] = useState<Post>({
        userId: 1,
        title: "",
        body: "",
    });

    const createPostMutation = useCreatePost();

    const handleCreatePost = async (newPost: Post) => {
        try {
            const id = data!.length + 1;
            const newPostWithId = { ...newPost, id };
            await createPostMutation.mutateAsync(newPostWithId);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Block>
            <InputBlock>
                <div>
                    <input
                        type="text"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            setPosts({ ...posts, title: e.target.value });
                        }}
                    />
                    <textarea
                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                            setPosts({ ...posts, body: e.target.value });
                        }}
                    />
                    <button
                        onClick={() => {
                            handleCreatePost(posts);
                        }}
                    >
                        포스트 추가
                    </button>
                </div>
            </InputBlock>
            <LinkBlock>
                {data?.map((post) => (
                    <Link key={post!.id} href={`/posts/${post.id}`}>
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
    gap: 1rem;
`;

const InputBlock = styled.div`
    width: 100%;
    position: relative;

    & > div {
        width: calc(50% - 1rem);
        position: fixed;
        left: 3%;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    input {
        height: 2rem;
    }

    textarea {
        resize: none;
        width: 100% !important;
        height: 400px;
    }

    button {
        width: 100%;
        height: 2rem;
        background: blue;
        color: white;
    }
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
