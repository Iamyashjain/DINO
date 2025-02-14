import create from "zustand";
export const useGameStore = create((set, get) => ({
  score: 0,
  setScore: (newScore) => set({ score: newScore }),
  getScore: () => get().score, // Add this line
  resetScore: () => set({ score: 0 }),
}));
