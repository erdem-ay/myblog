import { create } from "zustand";
import { createProductsStore } from "./blog";
import { createUserStore } from "./user";
import { persist, createJSONStorage } from "zustand/middleware";


export const useStore = create(
  persist(
    (...args) => ({
      ...createProductsStore(...args),
      ...createUserStore(...args),
      hydrateStore: (data) => {
        const [set] = args;
        set({ ...data });
      },
    }),
    {
      name: 'next-zustand', 
      storage: createJSONStorage(() => sessionStorage), 
    }
  )
);