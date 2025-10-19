import Image from "next/image";
import { Button } from "@/components/ui/button";
import img from "../../../../public/assets/story.png";
import Link from "next/link";

// ✅ Fetch data server-side
async function getMovement() {
  try {
    const res = await fetch(
      "https://verbalmdt.softvencefsd.xyz/api/movements",
      { cache: "no-store" }
    );

    if (!res.ok) throw new Error("Failed to fetch movement data");

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching movement data:", error);
    return null;
  }
}

// ✅ Server Component
const Movement = async () => {
  const data = await getMovement();
  const movement = data?.data?.[0];

  if (!movement) {
    return (
      <div className="text-center py-20 text-gray-500">
        Failed to load movement data.
      </div>
    );
  }

  return (
    <section className="bg-[#D7DDDD] py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto grid lg:grid-cols-2 gap-10 items-start">
        {/* Left Text Section */}
        <div className="space-y-8">
          {movement.title.map((title, index) => (
            <div key={index}>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
                {title}
              </h2>
              <ul className="space-y-3 text-gray-700 mt-4">
                {movement.description[index]
                  .filter(Boolean) // remove nulls
                  .map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
              </ul>
            </div>
          ))}

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-6">
            <Link href={"/froms/RegisterForm"}>
              <Button>Register now</Button>
            </Link>
            <Link href={"/froms/SponsarFrom"}>
              <Button variant="outline">Be a sponsor</Button>
            </Link>
            <Link href={"/froms/PartnerForm"}>
              <Button variant="secondary">Donate Now</Button>
            </Link>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={movement.image || img}
              alt="Global Electrician Day Celebration"
              className="object-cover w-full h-[400px] lg:h-[500px]"
              priority
              width={800}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Movement;
