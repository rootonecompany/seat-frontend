"use client";

import { useGetPost, usePatchPost } from "@/hooks/useApi";
import { useState, ChangeEvent } from "react";
import styled from "styled-components";

export default function PostDetail({ id }: { id: number }) {
    const { data } = useGetPost(id);
    const [title, setTitle] = useState<string>("");
    const [body, setBody] = useState<string>("");

    const patchPostMutation = usePatchPost();

    const handleTitlePatchPost = async () => {
        try {
            await patchPostMutation.mutateAsync({
                id: id,
                post: { title: title },
            });
        } catch (error) {
            console.log(error);
        }
    };

    const handleBodyPatchPost = async () => {
        try {
            await patchPostMutation.mutateAsync({
                id: id,
                post: { body: body },
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1>{data?.title}</h1>
            <span>{data?.body}</span>

            <FormBox>
                <input
                    type="text"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setTitle(e.target.value);
                    }}
                />
                <button onClick={handleTitlePatchPost}>제목 수정하기</button>
            </FormBox>
            <FormBox>
                <input
                    type="text"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setBody(e.target.value);
                    }}
                />
                <button onClick={handleBodyPatchPost}>본문 수정하기</button>
            </FormBox>
        </div>
    );
}

const FormBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    input {
        border: 1px solid #ccc;
        padding: 0.5rem;
    }

    button {
        width: 100px;
        height: 50px;
        background: blue;
        color: white;
        padding: 0.5rem;
    }
`;
