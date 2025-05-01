import { useQuery } from "@tanstack/react-query"
import { getAllTags } from "@/entities/posts/api/getAllTags"

export const useTagsList = () => {
  return useQuery({
    queryKey: ["tags"],
    queryFn: getAllTags,
  })
}
