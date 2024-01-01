import { create } from "zustand";
import { ModelData } from "../types/types";

interface ModelModalProps {
  isOpen: boolean;
  data?: ModelData;
  onOpen: (data: ModelData) => void;
  onClose: () => void;
}

const useModelModal = create<ModelModalProps>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: ModelData) => set({ data: data, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useModelModal;
