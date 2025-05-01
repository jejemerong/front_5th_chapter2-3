import { Post } from "@/entities/posts/model/post.type"
import { useAllPostsQuery } from "@/entities/posts/model/useAllPostsQuery"
import { useAllUsersQuery } from "@/entities/users/model/useAllUsersQuery"

export const usePostsWithUsers = (limit: number, skip: number) => {
  const postsQuery = useAllPostsQuery(limit, skip)
  const usersQuery = useAllUsersQuery()

  const isLoading = postsQuery.isLoading || usersQuery.isLoading
  const isError = postsQuery.isError || usersQuery.isError

  // TODO: 데이터 조합 따로 함수로 분리
  let posts: Post[] = []
  if (postsQuery.data && usersQuery.data) {
    posts = postsQuery.data.posts.map((post) => ({
      ...post,
      author: usersQuery.data.users.find((user) => user.id === post.userId),
    }))
  }

  return {
    posts,
    total: postsQuery.data?.total ?? 0,
    isLoading,
    isError,
    error: postsQuery.error || usersQuery.error,
  }
}
