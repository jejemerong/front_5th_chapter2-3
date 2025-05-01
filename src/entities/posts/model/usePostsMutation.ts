import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addPost } from "@/entities/posts/api/addPost"
import { updatePost } from "@/entities/posts/api/updatePost"
import { deletePost } from "@/entities/posts/api/deletePost"
import { Post } from "@/entities/posts/model/post.type"

export const useAddPostsMutation = () => {
  return useMutation({
    mutationFn: addPost,
  })
}

export const useUpdatePostsMutation = () => {
  return useMutation({
    mutationFn: (post: Post) => updatePost(post),
  })
}

export const useDeletePostsMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (postId: number) => deletePost(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] })
    },
  })
}
