export const getSearchQueryPosts = async (query: string) => {
  const res = await fetch(`/api/posts/search?query=${query}`)
  return res.json()
}
