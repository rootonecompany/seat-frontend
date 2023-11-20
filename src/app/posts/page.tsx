import { dehydrate } from "@tanstack/react-query";
import { getQueryClient } from "@/utils/getQueryClient";
import Posts from "@/app/posts/Posts";
import HydrateClient from "@/lib/HydrateClient";
import { getPosts } from "@/apis/api/posts";

export default async function Post() {
    // const queryClient = getQueryClient();
    // await queryClient.prefetchQuery(["posts"], getPosts);
    // const dehydratedState = dehydrate(queryClient);

    return (
        <Posts />
        // <HydrateClient state={dehydratedState}>
        // </HydrateClient>
    );
}
