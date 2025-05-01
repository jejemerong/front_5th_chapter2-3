import { create } from "zustand"

interface PostsStoreState {
  posts: Post[]
  total: number
  skip: number
  limit: number
  setPosts: (posts: Post[]) => void
  setTotal: (total: number) => void
  setSkip: (skip: number) => void
  setLimit: (limit: number) => void
}

export const usePostsStore = create<PostsStoreState>((set) => ({
  posts: [],
  total: 0,
  skip: 0,
  limit: 10,
  setPosts: (posts) => set((prev) => ({ ...prev, posts })),
  setTotal: (total) => set((prev) => ({ ...prev, total })),
  setSkip: (skip) => set((prev) => ({ ...prev, skip })),
  setLimit: (limit) => set((prev) => ({ ...prev, limit })),
}))

/*
{
  "posts": [
    {
      "id": 1,
      "title": "His mother had always taught him",
      "body": "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
      "tags": [
        "history",
        "american",
        "crime"
      ],
      "reactions": {
        "likes": 192,
        "dislikes": 25
      },
      "views": 305,
      "userId": 121
    },
    {...},
    {...}
    // 30 items
  ],
  "total": 251,
  "skip": 0,
  "limit": 30
}
*/
