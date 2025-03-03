import { create } from "zustand";

export type SidebarState = {
  status: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
};

export const useSidebar = create<SidebarState>((set) => ({
  status: false,
  openSidebar: () => set({ status: true }),
  closeSidebar: () => set({ status: false }),
}));
