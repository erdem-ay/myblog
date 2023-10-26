const beUrl= process.env.BE_URL;


export const createProductsStore = (set) => ({
    product: {},
    products: [],
    getBlogs: async () => {
      const response = await fetch(`${beUrl}blogs`);
      const products = await response.json();
      set({ products });
  
      return products;
    },

    getUsersBlogs: async (userId) => {
      const response = await fetch(`${beUrl}blogs/?author=${userId}`);
      const products = await response.json();
      set({ products });
  
      return products;
    },
  });