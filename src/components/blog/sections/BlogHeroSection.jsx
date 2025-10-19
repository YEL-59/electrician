import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// ✅ Server-side fetch function
async function getBlogHeroSection() {
  try {
    const res = await fetch(
      "https://verbalmdt.softvencefsd.xyz/api/api-blogs",
      {
        cache: "no-store", // disables caching, ensures fresh data
      }
    );

    if (!res.ok) throw new Error("Failed to fetch blog hero data");

    const data = await res.json();
    return data?.data || [];
  } catch (error) {
    console.error("Error fetching blog hero data:", error);
    return [];
  }
}

// ✅ Server Component
const BlogHeroSection = async () => {
  const blogs = await getBlogHeroSection();

  if (!blogs.length) {
    return (
      <div className="text-center py-20 text-gray-500">
        Failed to load blog data.
      </div>
    );
  }

  // Take first 4 blogs (1 featured + 3 regular)
  const [featuredPost, ...rest] = blogs.slice(0, 4);
  const blogPosts = rest;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
          Our Recent Blog
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* ✅ Featured Large Card */}
          <Link href={`/blog/${featuredPost.id}`}>
            <Card className="overflow-hidden border-0 p-0 shadow-none cursor-pointer bg-transparent hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-80">
                <img
                  src={featuredPost.image_url}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {featuredPost.description?.slice(0, 150)}...
                </p>
                <Button
                  variant="ghost"
                  className="group px-0 text-blue-600 hover:text-blue-700 hover:bg-transparent"
                >
                  Read more
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </Link>

          {/* ✅ Right Column - Smaller Cards */}
          <div className="flex flex-col gap-6">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <Card className="overflow-hidden border-0 p-0 shadow-none bg-transparent hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                  <div className="flex flex-col sm:flex-row">
                    <div className="relative h-48 sm:h-auto sm:w-48 flex-shrink-0">
                      <img
                        src={post.image_url}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6 flex flex-col justify-center">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        {post.description?.slice(0, 120)}...
                      </p>
                      <Button
                        variant="ghost"
                        className="group px-0 w-fit text-blue-600 hover:text-blue-700 hover:bg-transparent"
                      >
                        Read more
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeroSection;
