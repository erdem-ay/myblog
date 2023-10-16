"use client";
import Editor from "@/components/editor/Editor";
import { postBlog } from "@/utils/api";
import React, { useState } from "react";
import { toast } from "react-toastify";

let id: string | null = "";
if (typeof window !== "undefined") {
  id = window.localStorage.getItem("id");
}


let currentUser: { id: string } ;
if (id) {
  currentUser = {id};
} else {
  currentUser = { id: "defaultUserId" };
}


const AddBlog: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await postBlog({ title, body, author: currentUser.id });
    if (response.status === "success") {
      toast.success("Blog added successfully");
      window.location.href = "/";
    } else {
      toast.error("Something went wrong. Try again!");
    }
  };

  const handleChange = (text: string) => {
    setBody(text);
  };

  return (
    <div
      className="bg-cover bg-center w-full bg-no-repeat py-12 px-4 sm:px-6 lg:px-8 flex-1 flex justify-center items-center"
      style={{ backgroundImage: 'url("https://picsum.photos/1600/900")' }}
    >
      <div className="w-11/2 bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">New Blog</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-lg font-medium">
              Title:
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border rounded-lg"
              required
              autoFocus
            />
          </div>
          <div>
            <label htmlFor="body" className="block text-lg font-medium">
              Body:
            </label>
            <Editor
              placeholder="Type here"
              value={body}
              onChange={handleChange}
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 w-40 rounded-lg hover:bg-blue-400 transition text-lg"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
