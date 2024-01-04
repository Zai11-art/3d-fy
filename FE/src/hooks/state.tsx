import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { User } from "../types/types";

interface ModeProps {
  isDarkMode: boolean;
  isLoggedIn: boolean;
  user: User | null;
  token: string | null;
  setDarkMode: () => void;
}

const useMode = create<ModeProps>()(
  persist(
    (set) => ({
      isDarkMode: false,
      isLoggedIn: false,
      user: null,
      token: null,
      setDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
    }),
    {
      name: "mode-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

export default useMode;
