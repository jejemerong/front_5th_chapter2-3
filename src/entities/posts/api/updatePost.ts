import { Post } from "@/entities/posts/model/post.type"

export const updatePost = async (selectedPost: Post) => {
  const res = await fetch(`/api/posts/${selectedPost.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(selectedPost),
  })
  if (res.ok) {
    return { message: "ok" }
  }
  throw new Error("Failed to update post")
}
