import Image from "next/image";
import img1 from "../../../../public/assets/electic.png";

const HeroCategorySection = () => {
  const categories = [
    {
      name: "Electrical Repairs",
      description: "Fixing electrical issues in homes and businesses.",
      icon: img1,
    },
    {
      name: "Lighting Installation",
      description: "Installing indoor and outdoor lighting solutions.",
      icon: img1,
    },
    {
      name: "Wiring and Rewiring",
      description: "Upgrading or replacing electrical wiring systems.",
      icon: img1,
    },
    {
      name: "Circuit Breaker Services",
      description: "Installing and repairing circuit breakers.",
      icon: img1,
    },
    {
      name: "Outlet and Switch Installation",
      description: "Adding or replacing electrical outlets and switches.",
      icon: img1,
    },
    {
      name: "Electrical Inspections",
      description: "Conducting safety inspections for electrical systems.",
      icon: img1,
    },
  ];

  return (
    <div className="bg-[#E8EDF4]">
      <div className="container mx-auto py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-transparent p-6 rounded-lg  flex flex-col items-center text-center hover:shadow-lg transition"
          >
            <div className="mb-4 w-20 h-20 relative">
              <Image
                src={category.icon}
                alt={category.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 60px, (max-width: 1200px) 80px, 100px"
              />
            </div>
            <h3 className="text-2xl font-semibold">{category.name}</h3>
            <p className="text-[#595959] text-xl font-normal">
              {category.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroCategorySection;
