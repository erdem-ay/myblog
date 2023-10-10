import React from 'react'
import { getUsersBlogs } from '@/utils/api'
import { BlogType } from '@/utils/types';

let id: string | null = "";
if (typeof window !== "undefined") {
  id = window.localStorage.getItem("id");
}

const MyBlog = async () => {
  const blogs: BlogType[] = await getUsersBlogs(id);
  
  console.log(blogs)
  return (
    <div  className="max-w-7xl mx-auto w-11/12">
      {blogs.map((blog, index) => (
        <div className="flex" key={index}>
          <h1>{blog.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: blog.body }} />
          <p>{blog.author}</p>
        </div>
      ))}
    </div>
  )
}

export default MyBlog