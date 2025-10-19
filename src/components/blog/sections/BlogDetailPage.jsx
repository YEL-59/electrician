import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

const normalizeUrl = (u) => (u || "").replace(/[`\"]/g, "").trim();

const BlogDetailPage = ({ blog }) => {
  const recentPosts = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=100&h=100&fit=crop",
      title: "Read: The progress and changes in the users",
      date: "December 25, 2024",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=100&h=100&fit=crop",
      title: "Read: The progress and changes in the users",
      date: "December 25, 2024",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=100&h=100&fit=crop",
      title: "Read: The progress and changes in the users",
      date: "December 25, 2024",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=100&h=100&fit=crop",
      title: "Read: The progress and changes in the users",
      date: "December 25, 2024",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="w-full h-64 md:h-96 bg-gray-200 overflow-hidden">
        <img
          src={normalizeUrl(blog?.image_url)}
          alt={blog?.title || "Blog hero"}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {blog?.title}
            </h1>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p>{blog?.description}</p>

              {/* Inline Images */}
              {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                    alt="Blog content 1"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop"
                    alt="Blog content 2"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div> */}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Other Blogs
              </h2>

              {/* Recent Posts */}
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <Card
                    key={post.id}
                    className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
                  >
                    <CardContent className="p-3">
                      <div className="flex gap-3">
                        <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2 leading-tight">
                            {post.title}
                          </h3>
                          <p className="text-xs text-gray-500">{post.date}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
