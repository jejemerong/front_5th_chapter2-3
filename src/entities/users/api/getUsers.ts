export const getUsers = async () => {
  const res = await fetch("/api/users?limit=0&select=username,image")
  return res.json()
}
