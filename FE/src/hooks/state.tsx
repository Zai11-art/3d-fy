import { create } from "zustand";

interface ModeProps {
  isDarkMode: boolean;
  setDarkMode: () => void;
}

const useMode = create<ModeProps>((set) => ({
  isDarkMode: false,
  setDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));

export default useMode;
