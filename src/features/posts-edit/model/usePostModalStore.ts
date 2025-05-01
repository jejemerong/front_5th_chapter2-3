import { create } from "zustand"
import { Post } from "@/entities/posts/model/post.type"

interface PostModalState {
  showAddDialog: boolean
  showEditDialog: boolean
  selectedPost: Post | null
  setShowAddDialog: (show: boolean) => void
  setShowEditDialog: (show: boolean) => void
  setSelectedPost: (post: Post | null) => void
}

export const usePostModalStore = create<PostModalState>((set) => ({
  showAddDialog: false,
  showEditDialog: false,
  selectedPost: null,
  setShowAddDialog: (show) => set({ showAddDialog: show }),
  setShowEditDialog: (show) => set({ showEditDialog: show }),
  setSelectedPost: (post) => set({ selectedPost: post }),
}))
