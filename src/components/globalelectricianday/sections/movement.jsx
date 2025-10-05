"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import img from "../../../../public/assets/story.png";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

const Movement = () => {
  return (
    <section className="bg-[#D7DDDD] py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Text Section */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Be Part of the Original Movement
          </h2>

          <p className="text-gray-700">
            When you participate or sponsor Global Electrician Day, you join:
          </p>

          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="text-green-500 mt-1 w-5 h-5" />
              <span>
                The first and longest-running observance dedicated exclusively to electricians,
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="text-green-500 mt-1 w-5 h-5" />
              <span>
                A community-led celebration documented in the public record,
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="text-green-500 mt-1 w-5 h-5" />
              <span>
                A growing movement to build lasting partnerships with schools, community groups, and leaders to
                support the electrical profession and create pathways for future generations.
              </span>
            </li>
          </ul>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mt-8">Future Goal</h3>
            <p className="text-gray-700 mt-2">
              To have an annual global electrician day in every licensing jurisdiction, we seek partnership in
              every country or licensing district throughout the world, for the last Saturday in May annually
              as Global Electrician Day.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-6">

            <Link href={"/froms/RegisterForm"}>   <Button>Register now</Button></Link>
            <Link href={"/froms/SponsarFrom"}>   <Button variant="outline">Be a sponsor</Button></Link>
            <Link href={"/froms/PartnerForm"}>     <Button variant="secondary">Donate Now</Button></Link>

          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={img}
              alt="Global Electrician Day Celebration"
              className="object-cover w-full h-[400px] lg:h-[500px]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Movement;
