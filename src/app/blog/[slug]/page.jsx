import BlogDetailPage from "@/components/blog/sections/BlogDetailPage";

const BlogDetails = ({ params }) => {
  // You can fetch blog data here based on params.slug
  // For now, passing the slug to the component
  return (
    <div>
      <BlogDetailPage slug={params.slug} />
    </div>
  );
};

export default BlogDetails;

// Optional: Generate static params for static generation
export async function generateStaticParams() {
  // Fetch your blog posts
  // const posts = await fetchBlogPosts();

  return [
    { slug: "most-popular-design-systems" },
    { slug: "understanding-accessibility" },
    { slug: "best-tools-for-website" },
  ];
}

// Optional: Generate metadata for SEO
export async function generateMetadata({ params }) {
  // Fetch blog post data
  // const post = await fetchBlogPost(params.slug);

  return {
    title: `Blog Post - ${params.slug}`,
    description: "Blog post description",
  };
}
