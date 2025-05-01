import { Post } from "@/entities/posts/model/post.type"

export const addPost = async (newPost: Pick<Post, "title" | "body" | "userId">) => {
  const res = await fetch("/api/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPost),
  })
  return res.json()
}
