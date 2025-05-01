export const getUniqueUser = async (userId: number) => {
  const res = await fetch(`/api/users/${userId}`)
  return res.json()
}
