import { useQuery } from "@tanstack/react-query"
import { getAllUsers } from "@/entities/users/api/getAllUsers"
import { User } from "@/entities/users/model/user.type"

interface UsersResponse {
  users: User[]
}

export const useAllUsersQuery = () => {
  return useQuery<UsersResponse>({
    queryKey: ["users", "username-image"],
    queryFn: getAllUsers,
  })
}
