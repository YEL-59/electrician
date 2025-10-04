import AllBlogGrid from "@/components/blog/sections/AllBlogGrid";
import BlogHeroSection from "@/components/blog/sections/BlogHeroSection";
import React from "react";

const Blog = () => {
  // // Fetch blog post by slug
  // const post = await fetch(`/api/blog/${params.slug}`).then(res => res.json());
  // <BlogDetailPage post={post} />
  return (
    <div>
      <BlogHeroSection />
      <AllBlogGrid />
    </div>
  );
};

export default Blog;
