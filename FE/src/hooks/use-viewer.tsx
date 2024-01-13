import { create } from "zustand";
import { ConfirmationData } from "../types/types";

interface InfoModalprops {
  data?: ConfirmationData;
  onOpen: (file: any) => void;
}

const useViewer = create<InfoModalprops>((set) => ({
  data: undefined,
  onOpen: (file: any) => set({ data: file }),
}));

export default useViewer;
