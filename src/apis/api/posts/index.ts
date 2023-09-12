import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// 타입
import { Post } from "@/interface";

export async function getPosts() {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
    );

    return response.data as Post[];
}

// 포스트 리스트 가져오기
export function useGetPosts() {
    const { data, isLoading, error } = useQuery(["posts"], async () => {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
        );
        return response.data as Post[];
    });

    return { data, isLoading, error };
}

// 포스트 삭제하기
export function useDeletePost() {
    const queryClient = useQueryClient();

    const deletePostMutation = useMutation(
        async (id: number) => {
            await axios.delete(
                `https://jsonplaceholder.typicode.com/posts/${id}`
            );
        },
        {
            onMutate: async (id: number) => {
                await queryClient.cancelQueries(["posts"]);

                const previousPosts = queryClient.getQueryData<Post[]>([
                    "posts",
                ]);

                queryClient.setQueryData<Post[]>(
                    ["posts"],
                    previousPosts?.filter((post) => post.id !== id)
                );
            },
        }
    );

    return deletePostMutation;
}
