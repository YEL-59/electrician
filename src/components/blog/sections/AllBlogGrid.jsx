"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const normalizeUrl = (u) => (u || "").replace(/[`\"]/g, "").trim();
const normalizeBlog = (b) => ({
  ...b,
  image_url: normalizeUrl(b?.image_url || b?.image || ""),
  description: b?.description || b?.details || "",
});

const ITEMS_PER_PAGE = 8;

const AllBlogGrid = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/api-blogs", {
          cache: "no-store",
        });
        const data = await res.json();
        if (data?.data) {
          // Skip the first 4 blogs (already shown in hero section)
          const remaining = data.data.slice(4).map(normalizeBlog);
          setBlogs(remaining);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Pagination logic
  const totalPages = Math.ceil(blogs.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedBlogs = blogs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePageChange = (page) => setCurrentPage(page);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] text-gray-500">
        Loading blogs...
      </div>
    );
  }

  if (!blogs.length) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] text-gray-500">
        No blogs found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 py-4 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
          Our All Blogs
        </h1>

        {/* ✅ Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {paginatedBlogs.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <Card className="overflow-hidden border-0 p-0 shadow-none transition-all duration-300 hover:-translate-y-1 bg-transparent cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={normalizeUrl(post.image_url)}
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

        {/* ✅ Pagination */}
        {totalPages > 1 && (
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
        )}
      </div>
    </div>
  );
};

export default AllBlogGrid;
