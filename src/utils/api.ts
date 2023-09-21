import { BlogType } from "./types";

export const getBlogs = async () => {
  const response = await fetch("http://localhost:3000/posts", {
    cache: "no-cache",
  });
  const data = await response.json();
  return data;
};

export const postBlog = async (data: BlogType) => {
  const response = await fetch("http://localhost:3000/posts", {
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
