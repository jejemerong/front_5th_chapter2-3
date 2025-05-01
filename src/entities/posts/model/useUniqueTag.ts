import { useQuery } from "@tanstack/react-query"
import { getUniqueTag } from "@/entities/posts/api/getUniqueTag"

export const useUniqueTag = (tag: string) => {
  return useQuery({
    queryKey: ["tags", tag],
    queryFn: () => getUniqueTag(tag),
    enabled: !!tag,
  })
}
