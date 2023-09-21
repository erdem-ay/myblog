"use client";
import Editor from "@/components/editor/Editor";
import { postBlog } from "@/utils/api";
import React, { useState } from "react";
import { toast } from "react-toastify";

const AddBlog: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let response = await postBlog({ title, content });
    if (response.status == "success") {
      toast.success("Blog added successfully");
    } else {
      toast.error("Something went wrong. Try again!");
    }
  };

  const handleChange = (text: string) => {
    setContent(text);
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
            <label htmlFor="content" className="block text-lg font-medium">
              Contents:
            </label>
            <Editor
              placeholder="Type here"
              value={content}
              onChange={handleChange}
            />
            {/* <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
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
