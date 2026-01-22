import React from "react";
import { Trophy, Users, Code, Globe } from "lucide-react";

const features = [
  {
    icon: <Trophy className="w-full h-full text-[#ff7f50]" />,
    text: "$100k+ in prizes awarded",
  },
  {
    icon: <Users className="w-full h-full text-[#ff7f50]" />,
    text: "1,000+ active members",
  },
  {
    icon: <Code className="w-full h-full text-[#ff7f50]" />,
    text: "1M+ lines of code written",
  },
  {
    icon: <Globe className="w-full h-full text-[#ff7f50]" />,
    text: "10+ countries represented",
  },
];

const BankAnywhere = () => {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-16 items-center">
          <div className="md:col-span-5 text-center md:text-left">
            <h2
              className="text-black text-5xl md:text-[56px] lg:text-6xl font-bold tracking-[-0.02em] leading-[1.1]"
              dangerouslySetInnerHTML={{
                __html: "Everyone.<br />Everywhere.",
              }}
            />
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <div className="flex flex-col gap-12 sm:gap-14">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12">{feature.icon}</div>
                  <h3 className="text-xl lg:text-2xl font-semibold text-black pt-1 leading-snug">
                    {feature.text}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BankAnywhere;
