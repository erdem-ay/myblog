import { BlogType } from "./types";
const blogUrl = process.env.BLOG_URL;



export const getBlogs = async () => {
  const response = await fetch(`${blogUrl}`, {
    cache: "no-cache",
  });
  const data = await response.json();
  return data;
};

export const postBlog = async (data: BlogType) => {
  console.log(blogUrl,"Erdem")
  const response = await fetch(`${blogUrl}`, {
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
