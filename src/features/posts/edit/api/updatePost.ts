import { Post } from "@/entities/posts/model/post.type"

export const updatePost = async (post: Post) => {
  const res = await fetch(`/api/posts/${post.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  })
  return res.json()
}
