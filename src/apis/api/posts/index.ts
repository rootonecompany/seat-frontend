import { PostApi } from "../../instance.api";

// 타입
import { Post } from "@/interface";

// 포스트 가져오기
export async function getPosts() {
    const response = await PostApi.get("/posts");

    return response.data as Post[];
}

// 특정 포스트 가져오기
export async function getPost(id: number) {
    const response = await PostApi.get(`/posts/${id}`);

    return response.data as Post;
}

// 포스트 생성하기
export async function createPost(post: Post) {
    const response = await PostApi.post("/posts", post);

    return response.data as Post;
}

// 포스트 삭제하기
export async function deletePost(id: number) {
    const respone = await PostApi.delete(`/posts/${id}`);

    return respone.data as Post[];
}
