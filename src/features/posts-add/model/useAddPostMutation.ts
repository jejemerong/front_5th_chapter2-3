import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addPost } from "@/entities/posts/api/addPost"

export const useAddPostMutation = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: (newPost: Post) => addPost(newPost),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] })
    },
  })

  return mutation
}
