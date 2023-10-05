import { getBlogs } from "@/utils/api";
import { BlogType } from "@/utils/types";
const blogUrl = process.env.BLOG_URL;


export default async function Home() {
const blogs:BlogType[] = await getBlogs();
 console.log("Erdem",blogUrl);

  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h1>{blog.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: blog.body }} />
          <p>{blog.author}</p>
        </div>
        ))}
    </div>
  );
}
