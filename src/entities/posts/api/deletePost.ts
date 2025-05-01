export const deletePost = async (postId: number) => {
  const res = await fetch(`/api/posts/${postId}`, {
    method: "DELETE",
  })
  return res.json()
}
