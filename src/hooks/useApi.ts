import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deletePost, getPosts } from "@/apis/api/posts";
import { Post } from "@/interface";

export function useGetPosts() {
    const { data, isLoading, error } = useQuery(["posts"], getPosts);

    return { data, isLoading, error };
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
