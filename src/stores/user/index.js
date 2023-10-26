const beUrl = process.env.BE_URL;


export const createUserStore = (set, get) => ({
    user: {},
    // getBlogs: async () => {
    //   const response = await fetch(`${beUrl}blogs`);
    //   const products = await response.json();
    //   set({ products });

    //   return products;
    // },

    
    updateUser: (userInfo) => {
        console.log("userınfo",userInfo)
        set({ user: userInfo });
        return userInfo
    },

    getUser: () => {
        const { user } = get()
        return user;
    }
});