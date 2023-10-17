import { BlogType } from "./types";
import { RegisterType } from "./types";
const beUrl= process.env.BE_URL;


// GET BLOG
export const getBlogs = async () => {
  const response = await fetch(`${beUrl}blogs`, {
    cache: "no-cache",
  });
  const data = await response.json();
  return data;
};

// GET USER BLOG
export const getUsersBlogs = async (userId: string | null) => {
  const response = await fetch(`${beUrl}blogs/?author=${userId}`, {
    cache: "no-cache",
  });
  const data = await response.json();
  return data;
};



// DELETE USER BLOG
export const deleteBlog = async (blogId: string | null) => {
  const response = await fetch(`${beUrl}blogs/${blogId}`, { method: 'DELETE' })
  const data = await response.json();
  
  return data;
}

export const getBlog = async (blogId: string | null) => {
  const response = await fetch(`${beUrl}blogs/${blogId}`, {
    cache: "no-cache",
  });
  const data = await response.json();
  return data;
};


// PUT USER BLOG
export const putBlog = async (blogId: string | null, data: BlogType) => {
  const response = await fetch(`${beUrl}blogs/${blogId}`, {
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
  const response = await fetch(`${beUrl}blogs`, {
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
};
