import { create } from "zustand";
import { Post } from "../types/types";

interface ModelModalProps {
  isOpen: boolean;
  data?: Post;
  onOpen: (data: Post) => void;
  onClose: () => void;
}

const useModelModal = create<ModelModalProps>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: Post) => set({ data: data, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useModelModal;
