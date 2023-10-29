const beUrl = process.env.BE_URL;


export const createUserStore = (set, get) => ({
    user: {},

    updateUser: (userInfo) => {
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

    postUpdatedUser:async (data) =>  {
        const { user } = get()
        try {
            await fetch(`${beUrl}user/update`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            })
              .then((response) => response.json())
              .then((data) => {
                set({ user: {...user, firstName:data.firstName,lastName:data.lastName} });
              });
          } catch (error) {
            console.error(error);
          }
    }
    

});