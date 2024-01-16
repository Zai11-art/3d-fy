import { create } from "zustand";
import { ConfirmationData, InputModalProps } from "../types/types";

interface InputModal {
  isOpen: boolean;
  data?: InputModalProps;
  onOpen: (data: InputModalProps) => void;
  onClose: () => void;
}

const useInputModal = create<InputModal>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: InputModalProps) => set({ data: data, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useInputModal;
