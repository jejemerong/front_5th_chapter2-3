import { Reaction } from "./reaction.type"
import { Tag } from "./tag.type"

export interface Post {
  id: number
  title: string
  body: string
  tags: Tag[]
  reactions: Reaction
  userId: number
}
