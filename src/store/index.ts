import { User } from "app";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface LocalState {
  siderCollapsed: boolean;
  toggleSider: () => void;
  user: User;
  setUser: (_: User) => void;
}

const defaultUser: User = {
  id: 0,
  address: "",
  email: "",
  is_super: "",
  role_id: 0,
  sex: "",
  status: "",
  tel: "",
  username: "",
  nickname: "",
};

export const useStore = create<LocalState>()(
  persist(
    (set) => ({
      siderCollapsed: false,
      toggleSider: () =>
        set((state) => ({ siderCollapsed: !state.siderCollapsed })),
      user: defaultUser,
      setUser: (user) => set((state) => ({ user: { ...state.user, ...user } })),
    }),
    {
      name: "app-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        siderCollapsed: state.siderCollapsed,
        user: state.user,
      }),
    },
  ),
);
