const beUrl = process.env.BE_URL;


export const createBlogStore = (set, get) => ({
  blog: {},
  blogs: [],
  getBlogs: async () => {
    const response = await fetch(`${beUrl}blogs`, {
      cache: "no-cache",
    });
    const blogs = await response.json();
    set({ blogs });

    return blogs;
  },

  getUsersBlogs: async (userId) => {
    const response = await fetch(`${beUrl}blogs/?author=${userId}`);
    const blogs = await response.json();
    set({ blogs });

    return blogs;
  },

  postBlog: async (data) => {
    const { blogs } = get()
    const response = await fetch(`${beUrl}blogs`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const res = await response.json();
      set({ blogs: [...blogs, data] });
      return { status: "success", ...res };
    } else {
      return { status: "fail" };
    }
  },

  deleteBlog: async (blogId) => {
    const response = await fetch(`${beUrl}blogs/${blogId}`, { method: 'DELETE' })
    const data = await response.json();

    return data;
  },


  getBlog: async (blogId) => {
    const { blogs } = get()
    const response = await fetch(`${beUrl}blogs/${blogId}`, {
      cache: "no-cache",
    });
    const data = await response.json();
    set({ blogs });
    return data;
  },

  putBlog: async (blogId, data) => {
    const { blogs } = get()
    const response = await fetch(`${beUrl}blogs/${blogId}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
      
    });

    if (response.ok) {
      const res = await response.json();
      set({ blogs: [...blogs, data] });
      return { status: 'success', ...res };
    } else {
      return { status: 'fail' };
    }
  },

  register: async (data) => {
    const response = await fetch(`${beUrl}auth/register`, {
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