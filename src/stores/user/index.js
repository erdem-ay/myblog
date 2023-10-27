const beUrl = process.env.BE_URL;


export const createUserStore = (set, get) => ({
    user: {},

    updateUser: (userInfo) => {
        console.log("userınfo", userInfo)
        set({ user: userInfo });
        return userInfo
    },

    getUser: () => {
        const { user } = get()
        return user;
    },

    deleteUser: () => {
        set({ user: null });
        const { user } = get()
        return user
    },

});