import img from "../../../../public/assets/story.png";
import Image from "next/image";
const Mission = () => {
  return (
    <div className=" bg-[#E6EDFF] py-12 px-4 sm:px-6 lg:px-8">
      <div className=" container mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 p-8 md:p-12 lg:p-16 ">
        {" "}
        {/* Image Section */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-xl h-full min-h-[400px] lg:min-h-[500px]">
            <div className="w-full h-full bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-600 flex items-center justify-center">
              <div className="text-center text-white p-8 ">
                <Image
                  src={img}
                  alt="Celebration Image"
                  layout="fill"
                  objectFit="cover  "
                  className="opacity-90 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Text Content */}
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
              Our Mission
            </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                To honor electricians, empower them through community
                recognition, and inspire the next generation to pursue
                meaningful careers in the electrical trade.
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
                Global Electrician Day also seeks to build bridges among
                communities, learning institutions, industry partners, and
                elected officials, fostering total community solidification
                around the value of skilled trades. We believe that by
                connecting all stakeholders, we can elevate the electrical
                profession, strengthen the workforce pipeline, and ensure that
                every young person understands the opportunities available in
                this essential field.
              </p>

              <p>
                Electricians light the world—keeping homes, hospitals,
                businesses, and infrastructure powered safely every day. Their
                work deserves respect, celebration, and gratitude.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
