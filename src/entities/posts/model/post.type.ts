export interface Post {
  id: number
  title: string
  body: string
  tags: Tag[]
  reactions: Reaction
  userId: number
}

export interface Reaction {
  like: number
  dislike: number
}
export interface Tag {
  url: string
  slug: string
}
