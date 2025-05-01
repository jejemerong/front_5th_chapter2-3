import { deletePost } from "@/entities/posts/api/deletePost"
import { useMutation } from "@tanstack/react-query"

export const useDeletePostsMutation = () => {
  return useMutation({
    mutationFn: (postId: number) => deletePost(postId),
  })
}
