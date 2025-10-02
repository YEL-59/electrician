import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

const HeroTestimonialCarouselSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Jenny Wilson",
      role: "Designer ID",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      review:
        "Our designers were using it for their projects, so we already knew what kind of design they want.",
      rating: 5,
    },
    {
      id: 2,
      name: "Jenny Wilson",
      role: "Designer ID",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      review:
        "Our designers were using it for their projects, so we already knew what kind of design they want.",
      rating: 5,
    },
    {
      id: 3,
      name: "Sarah Johnson",
      role: "Developer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      review:
        "The quality of work exceeded our expectations. Highly professional and dedicated team.",
      rating: 5,
    },
    {
      id: 4,
      name: "Michael Chen",
      role: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      review:
        "Excellent service and attention to detail. They delivered exactly what we needed.",
      rating: 5,
    },
  ];

  return (
    <div className="w-full bg-[#00216B] py-16 px-4 relative overflow-hidden">
      {/* Decorative vertical stripes */}
      {/* <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0 w-8 bg-blue-950"
            style={{ left: `${i * 5}%` }}
          />
        ))}
      </div> */}

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <h2 className="text-5xl font-bold text-[#fff] mb-12">Testimonial</h2>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="pl-4 md:basis-1/2 lg:basis-1/2"
              >
                <Card className="bg-transparent border-none shadow-xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      {/* Image Section */}
                      <div className="w-full md:w-1/3 h-64 md:h-auto">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Content Section */}
                      <div className="flex-1 p-6 flex flex-col justify-between">
                        {/* Star Rating */}
                        <div className="flex gap-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 fill-amber-400 text-amber-400"
                            />
                          ))}
                        </div>

                        {/* Review Text */}
                        <p className="text-white text-base leading-relaxed mb-6 flex-1">
                          "{testimonial.review}"
                        </p>

                        {/* Author Info */}
                        <div>
                          <h4 className="text-white font-semibold text-lg">
                            {testimonial.name}
                          </h4>
                          <p className="text-blue-300 text-sm">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 bg-white/10 border-white/20 text-white hover:bg-white/20" />
          <CarouselNext className="hidden md:flex -right-12 bg-white/10 border-white/20 text-white hover:bg-white/20" />
        </Carousel>
      </div>
    </div>
  );
};

export default HeroTestimonialCarouselSection;
