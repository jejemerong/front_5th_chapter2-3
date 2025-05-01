import { useQuery } from "@tanstack/react-query"
import { getSearchQueryPosts } from "@/features/posts/search/api/getSearchQueryPosts"
import { Post } from "@/entities/posts/types/post.type"

interface PostsResponse {
  posts: Post[]
  total: number
}

export const useSearchPosts = (searchQuery: string) => {
  return useQuery<PostsResponse>({
    queryKey: ["posts", searchQuery],
    queryFn: () => getSearchQueryPosts(searchQuery),
    enabled: !!searchQuery,
  })
}
