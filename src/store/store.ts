import { create } from "zustand";

export type UserSigned = {
  status: boolean;
  loginUser: () => void;
  logoutUser: () => void;
};

export type SidebarState = {
  status: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  toggleSidebar: () => void;
};

export const isUserSigned = create<UserSigned>((set) => ({
  status: false,
  loginUser: () => set({ status: true }),
  logoutUser: () => set({ status: false }),
}));

export const useSidebar = create<SidebarState>((set) => ({
  status: false,
  openSidebar: () => set({ status: true }),
  closeSidebar: () => set({ status: false }),
  toggleSidebar: () => set((state) => ({ status: !state.status })),
}));
