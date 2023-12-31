"use client";
import React, { useState, useEffect } from "react";
import { BlogType } from "@/utils/types";
import { AiOutlineDelete } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
import Link from "next/link";
import Loading from "@/components/loading";
import { useStore } from "@/stores";
import { useRouter } from "next/navigation";

const MyBlog = () => {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { getUsersBlogs } = useStore.getState();
  const { user } = useStore();
  const router = useRouter()
  const { deleteBlog } = useStore.getState();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const _blogs = await getUsersBlogs(user.id);
      setBlogs(_blogs);
      setIsLoading(false);
    };
    if (user?.id) {
      fetchData();
    }else{
    router.push("/login")
    }
  }, []);

  const handleDelete = async (blogId: string) => {
    try {
      await deleteBlog(blogId);
      const updatedBlogs = await getUsersBlogs(user.id);
      setBlogs(updatedBlogs);
    } catch (error) {
      console.log("Error deleting or updating blogs:", error);
    }
  };

  return (
    <div
      className="bg-cover bg-center w-full bg-no-repeat flex-1 flex justify-center items-center"
      style={{ backgroundImage: 'url("https://picsum.photos/1600/900")' }}
    >
      <div className="max-w-2xl mx-auto w-11/12 my-8 ">
        {isLoading ? (
          <Loading />
        ) : blogs.length < 1 ? (
          <div className="flex justify-center">
            <div className="bg-white w-96 rounded-lg shadow-md p-6 text-center">
              <h1 className="text-3xl text-gray-800 font-bold mb-4">
                No blogs found!
              </h1>
              <p className="text-lg text-gray-600">
                Looks like you have not written any blogs yet.
              </p>
              <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md font-semibold transition duration-300">
                <Link href="/add-blog">Create a Blog</Link>
              </button>
            </div>
          </div>
        ) : (
          blogs.map((blog: any) => (
            <section
              className="flex flex-col border border-gray-700 bg-white p-12 mb-2 rounded-lg relative"
              key={blog._id}
            >
              <h1 className="text-2xl font-bold">{blog.title}</h1>
              <div
                className="prose max-w-none mt-2"
                dangerouslySetInnerHTML={{ __html: blog.body }}
              />
              <AiOutlineDelete
                className="text-red-400 absolute top-4 right-4 text-2xl cursor-pointer"
                onClick={() => handleDelete(blog?._id ?? "")}
              />
              <Link href={`/edit-blog/${blog._id}`}>
                <MdModeEdit
                  size={24}
                  className="text-green-400 absolute top-4 right-12 text-xl cursor-pointer"
                />
              </Link>
            </section>
          ))
        )}
      </div>
    </div>
  );
};

export default MyBlog;
