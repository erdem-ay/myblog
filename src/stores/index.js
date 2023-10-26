import { create } from "zustand";
import { createProductsStore } from "./product";


export const useStore = create((...args) => ({
    ...createProductsStore(...args),
    hydrateStore: (data) => {
      const [set] = args;
      set({ ...data });
    },
  }));