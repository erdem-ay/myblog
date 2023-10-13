import { BlogType } from "./types";
import { RegisterType } from "./types";
const blogUrl = process.env.BLOG_URL;
const registerURL = process.env.REGISTER_URL;


// GET BLOG
export const getBlogs = async () => {
  const response = await fetch(`${blogUrl}`, {
    cache: "no-cache",
  });
  const data = await response.json();
  return data;
};

// GET USER BLOG
export const getUsersBlogs = async (userId: string | null) => {
  const response = await fetch(`${blogUrl}?author=${userId}`, {
    cache: "no-cache",
  });
  const data = await response.json();
  return data;
};


// DELETE USER BLOG
export const deleteBlog = async (blogId: string | null) => {
  const response = await fetch(`${blogUrl}/${blogId}`, { method: 'DELETE' })
  const data = await response.json();
  
  return data;
}

export const getBlog = async (blogId: string | null) => {
  const response = await fetch(`${blogUrl}/${blogId}`, {
    cache: "no-cache",
  });
  const data = await response.json();
  return data;
};


// PUT USER BLOG
export const putBlog = async (blogId: string | null, data: BlogType) => {
  const response = await fetch(`${blogUrl}/${blogId}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });


  if (response.ok) {
    const res = await response.json();
    return { status: 'success', ...res };
  } else {
    return { status: 'fail' };
  }
};

// POST BLOG
export const postBlog = async (data: BlogType) => {
  const response = await fetch(`${blogUrl}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(response);
  if (response.ok) {
    const res = await response.json();
    return { status: "success", ...res };
  } else {
    return { status: "fail" };
  }
};

//REGISTER
export const register = async (data: RegisterType) => {
  const response = await fetch(`${registerURL}`, {
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
};
