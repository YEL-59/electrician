"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const AllBlogGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 6;

  const blogPosts = [
    {
      id: 1,
      slug: "most-popular-design-systems-2022",
      image:
        "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=400&h=300&fit=crop",
      title: "Most popular design systems to learn from in 2022",
      description:
        "Our platform helps licensed companies from electricians and plumbers",
    },
    {
      id: 2,
      slug: "understanding-accessibility-better",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
      title: "Understanding accessibility makes you a better",
      description:
        "Our platform helps licensed companies from electricians and plumbers",
    },
    {
      id: 3,
      slug: "15-best-tools-build-website",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop",
      title: "15 best tools that will help you build your website",
      description:
        "Our platform helps licensed companies from electricians and plumbers",
    },
    {
      id: 4,
      slug: "understanding-accessibility-better-2",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
      title: "Understanding accessibility makes you a better",
      description:
        "Our platform helps licensed companies from electricians and plumbers",
    },
    {
      id: 5,
      slug: "most-popular-design-systems-2022-2",
      image:
        "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=400&h=300&fit=crop",
      title: "Most popular design systems to learn from in 2022",
      description:
        "Our platform helps licensed companies from electricians and plumbers",
    },
    {
      id: 6,
      slug: "understanding-accessibility-better-3",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
      title: "Understanding accessibility makes you a better",
      description:
        "Our platform helps licensed companies from electricians and plumbers",
    },
    {
      id: 7,
      slug: "15-best-tools-build-website-2",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop",
      title: "15 best tools that will help you build your website",
      description:
        "Our platform helps licensed companies from electricians and plumbers",
    },
    {
      id: 8,
      slug: "understanding-accessibility-better-4",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
      title: "Understanding accessibility makes you a better",
      description:
        "Our platform helps licensed companies from electricians and plumbers",
    },
  ];

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 py-4 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
          Our All Blog
        </h1>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <Card className="overflow-hidden border-0 p-0 shadow-none transition-all duration-300 hover:-translate-y-1 bg-transparent cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full rounded-lg object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardContent className="p-0 mt-3">
                  <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-2 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {post.description}
                  </p>
                  <span className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                    Read more
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className="h-10 w-10 rounded-full hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          {[...Array(totalPages)].map((_, index) => {
            const page = index + 1;
            return (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "ghost"}
                size="icon"
                onClick={() => handlePageChange(page)}
                className={`h-10 w-10 rounded-full font-medium ${
                  currentPage === page
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "hover:bg-gray-200 text-gray-700"
                }`}
              >
                {page.toString().padStart(2, "0")}
              </Button>
            );
          })}

          <Button
            variant="ghost"
            size="icon"
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="h-10 w-10 rounded-full hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AllBlogGrid;
