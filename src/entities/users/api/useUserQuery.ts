import { useQuery } from "@tanstack/react-query"

export const useUserQuery = (userId: number) => {
  return useQuery({
    queryKey: ["user", userId],
    queryFn: () => fetch(`/api/users/${userId}`).then((res) => res.json()),
    enabled: !!userId,
  })
}
