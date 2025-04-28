import { Tag } from "@/tag/tag.type"
import { User } from "@/user/user.type"

export interface Post {
  total: number
  author: User
  body: string
  createdAt: string
  id: number
  reactions: Reaction
  tags: Tag[]
  title: string
  updatedAt: string
}

export interface Reaction {
  like: number
  dislike: number
}
