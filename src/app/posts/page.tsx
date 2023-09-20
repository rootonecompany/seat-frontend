import { dehydrate } from "@tanstack/react-query";
import { getQueryClient } from "@/utils/getQueryClient";
import Posts from "@/app/posts/Posts";
import HydrateClient from "@/utils/hydrate.client";
import { getPosts } from "@/apis/api/posts";

export default async function Post() {
    const queryClient = getQueryClient();
    await queryClient.prefetchQuery(["posts"], getPosts);
    const dehydratedState = dehydrate(queryClient);

    return (
        <HydrateClient state={dehydratedState}>
            <Posts />
        </HydrateClient>
    );
}
