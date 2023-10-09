import { getBlogs } from "@/utils/api";
import { BlogType } from "@/utils/types";
const blogUrl = process.env.BLOG_URL;

export default async function Home() {
  const blogs: BlogType[] = await getBlogs();

  return (
    <div className="max-w-7xl mx-auto w-11/12">
      {blogs.map((blog, index) => (
        <div className="flex pt-16" key={index}>
          <h1>{blog.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: blog.body }} />
          <p>{blog.author}</p>
        </div>
      ))}
    </div>
  );
}
