import { getPost } from "@/apis/api/posts";
import PostDetail from "@/app/posts/[id]/PostDetail";
import { getQueryClient } from "@/utils/getQueryClient";
import HydrateClient from "@/utils/hydrate.client";
import { dehydrate } from "@tanstack/react-query";

export default async function DetailPage({
    params,
}: {
    params: { id: string };
}) {
    const id = Number(params.id);
    const queryClient = getQueryClient();
    await queryClient.prefetchQuery(["post", id], () => getPost(id));
    const dehydrateState = dehydrate(queryClient);

    return (
        <HydrateClient state={dehydrateState}>
            <PostDetail id={id} />
        </HydrateClient>
    );
}
