import img from "../../../../public/assets/story.png";
import Image from "next/image";
const Matter = () => {
  return (
    <div className=" bg-[#E6EDFF] py-12 px-4 sm:px-6 lg:px-8">
      <div className=" container mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 p-8 md:p-12 lg:p-16 ">
        {" "}
        {/* Image Section */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-xl  h-[400px] lg:h-[500px]">
            <div className="w-full h-full bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-600 flex items-center justify-center">
              <div className="text-center text-white p-8 ">
                <Image
                  src={img}
                  alt="Celebration Image"
                  layout="fill"
                  objectFit="cover  "
                  className="opacity-90 rounded-lg h-full"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Text Content */}
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
              Why It Matters
            </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                When we began Global Electrician Day in 2019, no other dedicated
                celebration of electricians was widely visible or documented.
                Since then, many have recognized the importance of honoring
                tradespeople—but this initiative remains the first organized,
                community-declared day to celebrate electricians globally.
              </p>
              {/* 
              <div className="my-6">
                <Badge
                  variant="outline"
                  className="text-sm py-2 px-4 bg-blue-50 border-blue-200"
                >
                  📄 Instrument #118833216, Pages 1-24
                </Badge>
              </div> */}

              <p>
                Global Electrician Day is about shining a light on the skill,
                sacrifice, and dedication of electricians who make modern life
                possible—and about inspiring young people to join this respected
                and rewarding trade
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Matter;
