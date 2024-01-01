import { create } from "zustand";
import { InfoData } from "../types/types";

interface InfoModalprops {
  isOpen: boolean;
  data?: InfoData;
  onOpen: (data: InfoData) => void;
  onClose: () => void;
}

const useInfoModal = create<InfoModalprops>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: InfoData) => set({ data: data, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useInfoModal;
