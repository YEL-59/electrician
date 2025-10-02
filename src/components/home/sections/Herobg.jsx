import Image from "next/image";

const Herobg = () => {
  return (
    <section className="relative h-screen w-full">
      {/* Background image */}
      <Image
        src="/assets/bg.png"
        alt="Background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-black px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-4 leading-tight ">
            List Your Company. Reach More Customers.
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed">
            Our platform helps licensed companies — from electricians and
            plumbers to cleaning and maintenance firms — showcase their
            services, attract local customers, and grow their business.
          </p>
          <button className="bg-[#194A8C] hover:bg-blue-700 text-white font-semibold py-2.5 px-6 sm:py-3 sm:px-8 rounded-lg transition-all">
            Register Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Herobg;
