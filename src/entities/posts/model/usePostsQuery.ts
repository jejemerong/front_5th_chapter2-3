import { useQuery } from "@tanstack/react-query"
import { getPosts } from "@/entities/posts/api/getPosts"
import { Post } from "@/entities/posts/model/post.type"

interface PostsResponse {
  posts: Post[]
  total: number
  skip: number
  limit: number
}

export const usePostsQuery = () => {
  return useQuery<PostsResponse>({
    queryKey: ["posts"],
    queryFn: getPosts,
  })
}
