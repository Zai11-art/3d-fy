import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { User } from "../types/types";
import { shared } from "use-broadcast-ts";

interface ModeProps {
  isDarkMode: boolean;
  isLoggedIn: boolean;
  user: User | null;
  token: string | null;
  setDarkMode: () => void;
  setToken: (data: TokenProps) => void;
  setLogout: () => void;
}

interface TokenProps {
  user: User;
  token: string;
}

const useMode = create<ModeProps>()(
  shared(
    persist(
      (set) => ({
        isDarkMode: false,
        isLoggedIn: false,
        user: null,
        token: null,
        setDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
        setToken: (data: TokenProps) =>
          set({ user: data.user, token: data.token, isLoggedIn: true }),
        setLogout: () => set({ user: null, token: null, isLoggedIn: false }),
      }),
      {
        name: "mode-storage", // name of the item in the storage (must be unique)
        storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
      }
    ),
    { name: "broadcast" }
  )
);

export default useMode;
