import axios from "axios";

// 타입
import { Post } from "@/interface";

// 포스트 가져오기
export async function getPosts() {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
    );

    return response.data as Post[];
}

// 포스트 삭제하기
export async function deletePost(id: number) {
    const respone = await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    return respone.data as Post[];
}
