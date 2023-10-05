"use client";
import Editor from "@/components/editor/Editor";
import { postBlog } from "@/utils/api";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const AddBlog: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await postBlog({ title, body, author });
      if (response.status === "success") {
        toast.success("Blog added successfully");
        router.push("/");
      } else {
        toast.error("Something went wrong. Try again!");
      }
    } catch (error) {
      console.error("An error occurred while posting the blog:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  const handleChange = (text: string) => {
    setBody(text);
  };

  return (
    <div className="container mx-auto mt-8 flex justify-center">
      <div className="w-1/2">
        <h1 className="text-2xl font-bold mb-4">New Blog</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-lg font-medium">
              Title:
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border rounded"
              required
              autoFocus
            />
          </div>
          <div className="mb-4">
            <label htmlFor="author" className="block text-lg font-medium">
              Author:
            </label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="body" className="block text-lg font-medium">
              Body:
            </label>
            <Editor
              placeholder="Type here"
              value={body}
              onChange={handleChange}
            />
            {/* <textarea
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={6}
              className="w-full p-2 border rounded"
              required
            /> */}
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400 transition"
          >
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
