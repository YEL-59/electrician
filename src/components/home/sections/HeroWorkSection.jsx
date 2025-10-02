import React from "react";
import { Sparkles } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Search for Professionals",
      description:
        "Enter your location and service needs to instantly find licensed Companies near you.",
    },
    {
      number: 2,
      title: "Compare & Choose",
      description:
        "Browse profiles, check reviews, compare pricing, and explore available service packages.",
    },
    {
      number: 3,
      title: "Book Instantly",
      description:
        "Select your preferred electrician and schedule a service that fits your time.",
    },
    {
      number: 4,
      title: "Get the Job Done",
      description:
        "Your chosen professional arrives, completes the work, and ensures everything is safe and reliable.",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Our working process</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900">How it Works</h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative flex flex-col items-center text-center"
            >
              {/* Step Number Circle */}
              <div className="relative z-10 mb-6 ">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold text-sm ${
                    step.number === 2
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-400 border-2 border-gray-200"
                  }`}
                >
                  {step.number}
                </div>
              </div>
              {/* Dashed Line Connector - Hidden on mobile, shown on larger screens */}
              {index < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-6 left-1 w-full h-0.5 border-t-2 border-dashed border-gray-300 z-0 "
                  style={{ marginLeft: "50%" }}
                />
              )}

              {/* Step Label */}
              <div className="text-sm text-gray-400 font-medium mb-4">
                Step {step.number}
              </div>

              {/* Step Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default HowItWorks;
