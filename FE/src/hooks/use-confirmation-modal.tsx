import { create } from "zustand";
import { ConfirmationData } from "../types/types";

interface InfoModalprops {
  isOpen: boolean;
  data?: ConfirmationData;
  onOpen: (data: ConfirmationData) => void;
  onClose: () => void;
}

const useConfirmationModal = create<InfoModalprops>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: ConfirmationData) => set({ data: data, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useConfirmationModal;
