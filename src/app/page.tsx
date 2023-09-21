import { getBlogs } from "@/utils/api";
import { BlogType } from "@/utils/types";


export default async function Home() {
const blogs:BlogType[] = await getBlogs();
console.log(blogs);

  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h1>{blog.title}</h1>
          <p>{blog.content}</p>
        </div>
        ))}
    </div>
  );
}
