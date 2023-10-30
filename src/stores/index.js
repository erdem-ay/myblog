import { create } from "zustand";
import { createBlogStore } from "./blog";
import { createUserStore } from "./user";
import { persist, createJSONStorage } from "zustand/middleware";



export const useStore = create(

  persist(
    (...args) => ({
      ...createBlogStore(...args),
      ...createUserStore(...args),
      hydrateStore: (data) => {
        const [set] = args;
        set({ ...data });
      },
    }),
    {
      name: 'blogStorage',
      storage: createJSONStorage(() => sessionStorage), 
      // storage: createJSONStorage(() => localStorage),
    }
  )
);