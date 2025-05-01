export const getPostsSearchQuery = async (searchQuery: string) => {
  const res = await fetch(`/api/posts/search?query=${searchQuery}`)
  return res.json()
}
