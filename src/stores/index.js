import { create } from "zustand";
import { createProductsStore } from "./blog";
import { createUserStore } from "./user";


export const useStore = create((...args) => ({
    ...createProductsStore(...args),
    ...createUserStore(...args),
    hydrateStore: (data) => {
      const [set] = args;
      set({ ...data });
    },
  }));