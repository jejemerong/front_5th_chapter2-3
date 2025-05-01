import { useQuery } from "@tanstack/react-query"
import { getUsers } from "@/entities/users/api/getUsers"
import { User } from "@/entities/users/model/user.type"

interface UsersResponse {
  users: User[]
}

export const useUsersQuery = () => {
  return useQuery<UsersResponse>({
    queryKey: ["users", "username-image"],
    queryFn: getUsers,
  })
}
