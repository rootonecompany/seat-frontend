"use client";

import { DelPosts, getPosts } from "@/apis/api/posts/getPosts";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export default function PostsTest() {
    const queryClient = useQueryClient();
    const { data, isLoading } = useQuery({
        queryKey: ["posts2"],
        queryFn: getPosts,
    });
    const mutation = useMutation({
        mutationFn: DelPosts,
        onMutate: async (id: number) => {
            await queryClient.cancelQueries(["posts2"]);

            const previousPosts: any = queryClient.getQueryData(["posts2"]);

            queryClient.setQueryData(
                ["posts2"],
                previousPosts.filter((post: any) => post.id !== id)
            );
            return { previousPosts };
        },
        onSuccess: () => {
            console.log(queryClient.getQueryData(["posts2"]));
        },
    });

    if (isLoading) return <div>loading...</div>;
    return (
        <div>
            {data?.map((post) => (
                <div key={post.id} onClick={() => mutation.mutate(post.id)}>
                    <h1>{post.title}</h1>
                </div>
            ))}
        </div>
    );
}
