export const getAllTags = async () => {
  const res = await fetch("/api/posts/tags")
  return res.json()
}

