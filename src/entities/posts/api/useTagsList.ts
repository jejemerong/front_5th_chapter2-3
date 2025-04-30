import { useQuery } from "@tanstack/react-query"

export const useTagsList = () => {
  return useQuery({
    queryKey: ["tags"],
    queryFn: () => fetch("/api/posts/tags").then((res) => res.json()),
  })
}
