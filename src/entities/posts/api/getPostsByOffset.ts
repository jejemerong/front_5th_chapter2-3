export const getPostsByOffset = async (limit: number, skip: number) => {
  const res = await fetch(`/api/posts?limit=${limit}&skip=${skip}`)
  return res.json()
}
