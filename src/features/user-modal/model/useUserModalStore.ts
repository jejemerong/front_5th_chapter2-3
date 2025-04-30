import { create } from "zustand"

interface UserModalState {
  selectedUserId: number | null
  isOpen: boolean
  setSelectedUserId: (id: number) => void
  openModal: (id: number) => void
  closeModal: () => void
}

export const useUserModalStore = create<UserModalState>((set) => ({
  selectedUserId: null,
  isOpen: false,
  setSelectedUserId: (id: number) => set({ selectedUserId: id }),
  openModal: (id: number) => set({ isOpen: true, selectedUserId: id }),
  closeModal: () => set({ isOpen: false, selectedUserId: null }),
}))
