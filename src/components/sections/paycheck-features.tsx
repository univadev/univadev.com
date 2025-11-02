import React from "react";
import Image from "next/image";

const features = [
  {
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1661919068698-40e7b78f196a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2t5c2NyYXBlciUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000",
    title: "Science",
    description: "Something really cool",
    ariaLabel: "Paycheck Advance Disclosures",
  },
  {
    imageSrc:
      "https://images.squarespace-cdn.com/content/v1/5e949a92e17d55230cd1d44f/1728765180191-0P1CIX6M73MCLITKFC4E/Campus.png",
    title: "Technology",
    description: "Something really cool",
    ariaLabel: "Fee-free Overdraft Disclosures",
  },
  {
    imageSrc:
      "https://www.shutterstock.com/shutterstock/videos/1048861207/thumb/1.jpg?ip=x480",
    title: "Engineering",
    description: "Something really cool",
    ariaLabel: "Faster Direct Deposit Disclosures",
  },
];

const PaycheckFeatures = () => {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="container mx-auto">
        <h2 className="text-center text-[32px] lg:text-[48px] font-bold text-black mb-12 lg:mb-16 leading-[1.2] tracking-[-0.01em] !whitespace-pre-line">
          The Biggest Student-Led STEM Organization
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
                <a
                  href="#"
                  className="mt-8 block text-center text-base font-semibold text-black border-2 border-black rounded-full py-3 px-8 transition-colors duration-300 hover:bg-black hover:text-white"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaycheckFeatures;
