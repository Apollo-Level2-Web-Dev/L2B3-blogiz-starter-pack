import BlogDetails from "@/components/ui/BlogDetails";
import { Blog } from "@/types";

interface BlogId {
  params: {
    blogId: string;
  };
}

export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs = await res.json();
  return blogs.slice(0, 3).map((blog: Blog) => ({
    blogId: blog.id,
  }));
};

const BlogDetailPage = async ({ params }: BlogId) => {
  //   console.log(params);
  const res = await fetch(`http://localhost:5000/blogs/${params.blogId}`, {
    cache: "no-store",
  });

  const blog = await res.json();
  //   console.log(blog);
  return (
    <div className="my-10">
      <BlogDetails blog={blog} />
    </div>
  );
};

export default BlogDetailPage;
