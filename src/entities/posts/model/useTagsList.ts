import { useQuery } from "@tanstack/react-query"
import { getTags } from "@/entities/posts/api/getTags"

export const useTagsList = () => {
  return useQuery({
    queryKey: ["tags"],
    queryFn: getTags,
  })
}
