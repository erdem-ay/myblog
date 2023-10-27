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

    postBlog : async (data) => {
      const response = await fetch(`${beUrl}blogs`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const res = await response.json();
        return { status: "success", ...res };
      } else {
        return { status: "fail" };
      }
    }
    
  });