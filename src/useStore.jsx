import { create } from "zustand";

export const useStore = create((set) => ({
  activeColorTop: 1,
  setActiveColorTop: (activeColorTop) => set({ activeColorTop }),
  activeColorInside: 1,
  setActiveColorInside: (activeColorInside) => set({ activeColorInside }),
  activeColorBottom: 1,
  setActiveColorBottom: (activeColorBottom) => set({ activeColorBottom }),
  activeColorEmission: 1,
  setActiveColorEmission: (activeColorEmission) => set({ activeColorEmission }),
  clicks: 0,
  setClicks: (clicks) => set({ clicks }),
  clickerVisible: 1,
  setClickerVisible: (clickerVisible) => set({ clickerVisible }),
}));
