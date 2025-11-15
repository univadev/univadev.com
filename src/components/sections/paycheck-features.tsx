import React from "react";
import Image from "next/image";

const features = [
  {
    imageSrc: "/leadershipprograms.png",
    title: "Leadership Programs",
    description:
      "Develop the skills to lead teams, manage projects, and drive innovation in STEM fields through hands-on experience.",
    ariaLabel: "Leadership Programs",
  },
  {
    imageSrc: "/skillbuildingworkshops.png",
    title: "Skill-Building Workshops",
    description:
      "Master cutting-edge technologies and methodologies through expert-led workshops designed for real-world application.",
    ariaLabel: "Skill-Building Workshops",
  },
  {
    imageSrc: "/globalhackathons.png",
    title: "Global Hackathons",
    description:
      "Compete in world-class hackathons, build meaningful projects, and connect with innovators from around the globe.",
    ariaLabel: "Global Hackathons",
  },
];

const PaycheckFeatures = () => {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="container mx-auto">
        <h2 className="text-center text-[32px] lg:text-[48px] font-bold text-black mb-12 lg:mb-16 leading-[1.2] tracking-[-0.01em] !whitespace-pre-line">
          Building the Future of STEM Leadership
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col border border-border rounded-2xl overflow-hidden"
            >
              <div className="relative w-full aspect-video">
                <Image
                  src={feature.imageSrc}
                  alt={feature.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h4 className="text-xl lg:text-2xl font-semibold text-black mb-2 !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line">
                  {feature.title}
                </h4>
                <p className="text-base text-muted-foreground leading-[1.6] flex-grow mb-0">
                  {feature.description}
                </p>

                {/* <a
                  href="#"
                  className="mt-8 block text-center text-base font-semibold text-black border-2 border-black rounded-full py-3 px-8 transition-colors duration-300 hover:bg-black hover:text-white"
                >
                  Learn More
                </a>
                  */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaycheckFeatures;
