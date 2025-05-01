export const getUniqueTag = async (tag: string) => {
  const res = await fetch(`/api/posts/tags/${tag}`)
  return res.json()
}
