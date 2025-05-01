import { useMutation } from "@tanstack/react-query"
import { addPost } from "@/entities/posts/api/addPost"

export const useAddPostsMutation = () => {
  return useMutation({
    mutationFn: addPost,
  })
}
