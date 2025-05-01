import { useQuery } from "@tanstack/react-query"
import { getUniqueUser } from "@/entities/users/api/getUniqueUser"
import { User } from "@/entities/users/model/user.type"

export const useUniqueUserQuery = (userId: number) => {
  return useQuery<User>({
    queryKey: ["user", userId],
    queryFn: () => getUniqueUser(userId),
    enabled: !!userId,
  })
}
