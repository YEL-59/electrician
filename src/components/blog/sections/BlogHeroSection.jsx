import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const BlogHeroSection = () => {
  const featuredPost = {
    id: 1,
    slug: "most-popular-design-systems-2022",
    image:
      "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&h=600&fit=crop",
    title: "Most popular design systems to learn from in 2022",
    description:
      "Here to know the secrets of handwriting a 21st down intro in 3x super fluid winning brands? We broke down all the expressions of complex conditions to understand the models of complex processes or relationships.",
  };

  const blogPosts = [
    {
      id: 2,
      slug: "understanding-accessibility-better",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
      title: "Understanding accessibility makes you a better",
      description:
        "Our platform helps Internet companies turn enterprise and plumbers",
    },
    {
      id: 3,
      slug: "understanding-accessibility-better-2",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      title: "Understanding accessibility makes you a better",
      description:
        "Our platform helps Internet companies turn enterprise and plumbers",
    },
    {
      id: 4,
      slug: "understanding-accessibility-better-3",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop",
      title: "Understanding accessibility makes you a better",
      description:
        "Our platform helps Internet companies turn enterprise and plumbers",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
          Our Recent Blog
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Large Card */}
          <Link href={`/blog/${featuredPost.slug}`}>
            <Card className="overflow-hidden border-0 p-0 shadow-none  cursor-pointer bg-transparent hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-80">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {featuredPost.description}
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

          {/* Right Column - Smaller Cards */}
          <div className="flex flex-col gap-6">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <Card className="overflow-hidden border-0 p-0 shadow-none bg-transparent hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                  <div className="flex flex-col sm:flex-row">
                    <div className="relative h-48 sm:h-auto sm:w-48 flex-shrink-0">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6 flex flex-col justify-center">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        {post.description}
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
