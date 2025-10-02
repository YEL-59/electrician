import React from "react";
import { Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function BlogComponent() {
  const blogPosts = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
      title: "Most popular design apps to learn from in 2022",
      description:
        "Our platform helps licensed companies from electricians and plumbers.",
      link: "Read more",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop",
      title: "Understanding accessibility makes you a better",
      description:
        "Our platform helps licensed companies from electricians and plumbers.",
      link: "Read more",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      title: "15 best tools that will help you build your website",
      description:
        "Our platform helps licensed companies from electricians and plumbers.",
      link: "Read more",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop",
      title: "Understanding accessibility makes you a better",
      description:
        "Our platform helps licensed companies from electricians and plumbers.",
      link: "Read more",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-pink-50/30 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-4">
            <Lightbulb className="w-4 h-4" />
            <span className="text-sm font-medium">
              Learn new things every day
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-800">Our Blog</h2>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="p-0  border-0 shadow-none overflow-hidden bg-transparent"
            >
              <CardContent className="p-0">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full rounded-lg object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-0 space-y-2 mt-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-3 leading-tight min-h-[56px]">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {post.description}
                  </p>
                  <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm hover:underline">
                    {post.link}
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-md">
            View all articles
          </Button>
        </div>
      </div>
    </div>
  );
}
