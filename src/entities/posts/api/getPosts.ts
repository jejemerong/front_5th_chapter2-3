export const getPosts = async () => {
  const res = await fetch(`/api/posts`)
  return res.json()
}
