export const getTags = async () => {
  const res = await fetch("/api/posts/tags")
  return res.json()
}
