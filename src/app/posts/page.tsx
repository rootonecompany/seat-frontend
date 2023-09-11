import { dehydrate } from "@tanstack/react-query";
import { getQueryClient } from "@/utils/getQueryClient";
import { getPosts } from "@/apis/api/posts/getPosts";
import Posts from "@/components/Posts";
import HydrateClient from "@/utils/hydrate.client";

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
