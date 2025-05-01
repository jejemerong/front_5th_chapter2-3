import { useMutation } from "@tanstack/react-query"
import { postAddPost } from "@/features/posts/add/api/postAddPost"

export const useAddPostMutation = () => {
  const mutation = useMutation({
    mutationFn: (newPost: Post) => postAddPost(newPost),
  })

  return mutation
}
