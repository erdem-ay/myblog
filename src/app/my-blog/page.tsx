import React from "react";
import { getUsersBlogs } from "@/utils/api";
import { BlogType } from "@/utils/types";

let id: string | null = "";
if (typeof window !== "undefined") {
  id = window.localStorage.getItem("id");
}

const MyBlog = async () => {
  const blogs: BlogType[] = await getUsersBlogs(id);

  console.log(blogs);
  return (
    <div
      className="bg-red-50 flex-1 flex justify-center items-center"
      style={{ backgroundImage: 'url("https://picsum.photos/1600/900")' }}
    >
      <div className="max-w-2xl mx-auto w-11/12 my-8 ">
        {blogs.map((blog, index) => (
          <div
            className="flex flex-col border border-gray-700 bg-white p-12 mb-2 rounded-lg"
            key={index}
          >
            <h1 className="text-2xl font-bold">{blog.title}</h1>
            <div
              className="prose max-w-none mt-2"
              dangerouslySetInnerHTML={{ __html: blog.body }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBlog;
