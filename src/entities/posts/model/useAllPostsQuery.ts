import { useQuery } from "@tanstack/react-query"
import { getPostsByOffset } from "@/entities/posts/api/getPostsByOffset"
import { Post } from "@/entities/posts/model/post.type"

interface PostsResponse {
  posts: Post[]
  total: number
}

export const useAllPostsQuery = (limit: number, skip: number) => {
  return useQuery<PostsResponse>({
    queryKey: ["posts", limit, skip],
    queryFn: () => getPostsByOffset(limit, skip),
    enabled: !!limit && !!skip,
  })
}
