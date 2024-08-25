import { Post } from "../types/Post";
import { getData } from "../utils/httpClient";

export function getUserPosts(userId: number) {
  return getData<Post[]>(`/posts?userId=${userId}`);
}