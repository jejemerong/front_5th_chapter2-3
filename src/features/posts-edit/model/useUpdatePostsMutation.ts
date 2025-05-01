import { updatePost } from "@/entities/posts/api/updatePost"
import { Post } from "@/entities/posts/model/post.type"
import { useMutation } from "@tanstack/react-query"

export const useUpdatePostsMutation = () => {
  return useMutation({
    mutationFn: (post: Post) => updatePost(post),
  })
}
