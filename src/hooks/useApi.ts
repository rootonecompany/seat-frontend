import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
    createPost,
    deletePost,
    getPost,
    getPosts,
    patchPost,
} from "@/apis/api/posts";
import { PatchPost, Post } from "@/interface";

export function useGetPosts() {
    const { data, isLoading, error } = useQuery(["posts"], getPosts);

    return { data, isLoading, error };
}

export function useGetPost(id: number) {
    const { data, isLoading, error } = useQuery(["post", id], () =>
        getPost(id)
    );

    return { data, isLoading, error };
}

export function useCreatePost() {
    const queryClient = useQueryClient();

    const createPostMutation = useMutation(createPost, {
        onMutate: async (newPost: Post) => {
            await queryClient.cancelQueries(["posts"]);

            const previousPosts: Post[] | undefined = queryClient.getQueryData([
                "posts",
            ]);

            if (previousPosts) {
                queryClient.setQueryData(
                    ["posts"],
                    previousPosts.concat(newPost)
                );
            }

            return { previousPosts };
        },
    });

    return createPostMutation;
}

export function usePatchPost() {
    const queryClient = useQueryClient();

    const patchPostMutation = useMutation(
        async ({ id, post }: { id: number; post: PatchPost }) =>
            patchPost(id, post),
        {
            // 요청이 시작되기 전에 실행되며, 주로 가상적인 업데이트 및 캐시 관련 작업을 수행함
            onMutate: async ({ id, post }: { id: number; post: PatchPost }) => {
                await queryClient.cancelQueries(["post", id]);

                const previousPost: Post | undefined = queryClient.getQueryData(
                    ["post", id]
                );

                if (previousPost) {
                    queryClient.setQueryData(["post", id], {
                        ...previousPost,
                        ...post,
                    });
                }

                return { previousPost };
            },
            // 요청이 실패할경우 실행됨 캐싱된 데이터를 이전 데이터로 복구함
            onError: (error, variables, context) => {
                console.error("Error", error);

                if (context?.previousPost) {
                    queryClient.setQueryData(
                        ["post", variables.id],
                        context.previousPost
                    );
                }
            },
            // 요청이 성공하거나 실패할경우 실행됨 성공시 실제 데이터를 캐시에 반영함
            onSettled: (data, error, variables, context) => {
                if (error) {
                    console.error("Error", error);
                } else {
                    queryClient.invalidateQueries(["post", variables.id]);
                }
            },
        }
    );

    return patchPostMutation;
}

export function useDeletePost() {
    const queryClient = useQueryClient();

    const deletePostMutation = useMutation(deletePost, {
        onMutate: async (id: number) => {
            await queryClient.cancelQueries(["posts"]);

            const previousPosts: Post[] | undefined = queryClient.getQueryData([
                "posts",
            ]);

            if (previousPosts) {
                queryClient.setQueryData(
                    ["posts"],
                    previousPosts.filter((post) => post.id !== id)
                );
            }

            return { previousPosts };
        },
    });

    return deletePostMutation;
}
