import { BlogType } from "./types";
import { RegisterType } from "./types";
const blogUrl = process.env.BLOG_URL;
const registerURL = process.env.REGISTER_URL;

export const getBlogs = async () => {
  const response = await fetch(`${blogUrl}`, {
    cache: "no-cache",
  });
  const data = await response.json();
  return data;
};

export const getUsersBlogs = async (userId: string | null) => {
  const response = await fetch(`${blogUrl}?author=${userId}`, {
    cache: "no-cache",
  });
  const data = await response.json();
  return data;
};

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
