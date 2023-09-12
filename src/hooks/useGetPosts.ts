import { useQuery, QueryFunction } from "@tanstack/react-query";

interface GetPostsProps<T> {
    key: string[];
    fn: QueryFunction<T>;
}

export function useCustomGetPosts<T>({ key, fn }: GetPostsProps<T>) {
    const { data, isLoading, error } = useQuery([...key], fn);

    return { data, isLoading, error };
}
