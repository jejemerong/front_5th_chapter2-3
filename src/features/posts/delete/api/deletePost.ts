export const deletePost = async (id: number) => {
  const res = await fetch(`/api/posts/${id}`, {
    method: "DELETE",
  })
  return res.json()
}
