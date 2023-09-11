import { getPosts } from "@/apis/api/posts/getPosts";
import PostsTest from "@/components/Posts2";
import { getQueryClient } from "@/utils/getQueryClient";

export default async function Posts2() {
    const queryClient = getQueryClient();
    await queryClient.fetchQuery(["posts2"], getPosts);

    return (
        <div>
            <PostsTest />
        </div>
    );
}
