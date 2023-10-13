"use client"
import React, { useState, useEffect } from "react";
import { getUsersBlogs, deleteBlog } from "@/utils/api";
import { BlogType } from "@/utils/types";
import { AiOutlineDelete } from "react-icons/ai"; 

const MyBlog = () => {
  const [blogs, setBlogs] = useState<BlogType[]>([]); 
  let id: string | null = "";
  
  if (typeof window !== "undefined") {
    id = window.localStorage.getItem("id");
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const _blogs = await getUsersBlogs(id);
        setBlogs(_blogs);
      } catch (error) {
        console.log("Error fetching:", error); 
      }
    };

    fetchData();
  }, [id]);

  const handleDelete = async (blogId: string) => {
    try {
      await deleteBlog(blogId);
      const updatedBlogs = await getUsersBlogs(id);
      setBlogs(updatedBlogs);
    } catch (error) {
      console.log("Error deleting or updating blogs:", error);
    }
  };

  console.log(id);
  return (
    <div
      className="bg-cover bg-center w-full bg-no-repeat flex-1 flex justify-center items-center"
      style={{ backgroundImage: 'url("https://picsum.photos/1600/900")' }}
    >
      <div className="max-w-2xl mx-auto w-11/12 my-8 ">
        {blogs.map((blog, index) => (

        
          <section
            className="flex flex-col border border-gray-700 bg-white p-12 mb-2 rounded-lg relative"
            key={index}
          >
            <h1 className="text-2xl font-bold">{blog.title}</h1>
            <div
              className="prose max-w-none mt-2"
              dangerouslySetInnerHTML={{ __html: blog.body }}
            />
            <AiOutlineDelete
              className="text-red-400 absolute top-4 right-4 text-xl cursor-pointer"
              onClick={() => handleDelete(blog._id)}
            />
          </section>
        ))}
      </div>
    </div>
  );
};

export default MyBlog;
