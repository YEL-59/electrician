"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HeroElectricianDay() {
  const [timeLeft, setTimeLeft] = useState({
    days: 161,
    hours: 6,
    minutes: 59,
    seconds: 19,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-[#E8EDF4] py-12">
      <div className="container mx-auto ">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8">
          <div className="flex-1">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              Annual Global
              <br />
              Electrician Day!
            </h1>
          </div>
          <div className="flex-1 lg:max-w-md">
            <p className="text-gray-600 mb-4">
              <span className="font-semibold">Last Sunday of May,</span> a
              yearly celebration of the professionals who keep the world powered
              — with contests, keynotes, and community events.
            </p>
            <Button className="bg-[#194A8C] hover:bg-blue-700 text-white px-6 py-2">
              Learn more
            </Button>
          </div>
        </div>

        {/* Large Group Photo */}
        <div className="w-full rounded-lg overflow-hidden shadow-lg mb-8">
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=400&fit=crop"
            alt="Electrician Day Group Photo"
            className="w-full h-64 lg:h-96 object-cover"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" /> */}
        </div>

        {/* Bottom Section with Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          {/* Main Event Card */}
          <Card className="lg:col-span-2 border-2 border-[#8AAEFF] bg-transparent shadow-lg ">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2 p-3">
                {/* Image Section */}
                <div className="relative h-64 md:h-auto px-5">
                  <img
                    src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=600&fit=crop"
                    alt="City Street Event"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content Section */}
                <div className="p-2 bg-transparent flex flex-col gap-5">
                  <div>
                    <h3 className="text-2xl font-semibold text-[#404040] mb-2 max-w-7xl">
                      Annual Global Electrician Day,2026!
                    </h3>
                    <p className="text-[#404040] text-sm mb-6">
                      Last Saturday of May, 30th, 2026
                    </p>

                    {/* Countdown Timer */}
                    <div className="grid grid-cols-4 gap-3 ">
                      <div className="bg-gray-800 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-white">
                          -{timeLeft.days}
                        </div>
                        <div className="text-xs text-gray-400">Days</div>
                      </div>
                      <div className="bg-gray-800 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-white">
                          -{timeLeft.hours}
                        </div>
                        <div className="text-xs text-gray-400">Hours</div>
                      </div>
                      <div className="bg-gray-800 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-white">
                          -{timeLeft.minutes}
                        </div>
                        <div className="text-xs text-gray-400">Min</div>
                      </div>
                      <div className="bg-gray-800 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-white">
                          -{timeLeft.seconds}
                        </div>
                        <div className="text-xs text-gray-400">Sec</div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex  gap-3">
                    <Button className="bg-[#194A8C] hover:bg-blue-700 text-white">
                      Register now
                    </Button>
                    <Button
                      variant="outline"
                      className="border-[#194A8C] hover:bg-[#194A8C] hover:text-white"
                    >
                      Be a sponsor
                    </Button>
                    <Button
                      variant="outline"
                      className="border-[#194A8C] hover:bg-[#194A8C] hover:text-white"
                    >
                      Donate Now
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Side Cards */}
          <div className="space-y-6">
            {/* Broward County Card */}
            <Card className="border-2 border-[#8AAEFF] shadow-md hover:shadow-lg transition-shadow bg-transparent">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-2 ">
                  Broward County FL Global Electrician Day
                </h4>
                <p className="text-sm text-gray-600">May 30, 2026</p>
              </CardContent>
            </Card>

            {/* Partner Card */}
            <Card className="border-2 border-[#8AAEFF] shadow-md hover:shadow-lg transition-shadow bg-transparent">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  Partner With Us and Grow Together
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  Join our network of trusted companies and industry leaders.
                </p>
                <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm">
                  Register Now <ArrowRight className="w-4 h-4" />
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
