import React from "react";
import Image from "next/image";
import { Info } from "lucide-react";

const CreditBuildingSection = () => {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-16">
          {/* Image Column */}
          <div className="lg:col-span-6">
            <Image
              src="https://cdn.mos.cms.futurecdn.net/CbivdLKKTLVsjak9RDT9J5.jpg"
              alt="Image description"
              width={592}
              height={592}
              className="w-full h-auto rounded-2xl"
            />
          </div>

          {/* Text Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="font-semibold text-black text-xs tracking-wider uppercase mb-4 !whitespace-pre-line">
              OUR MISSION
            </p>
            <h2 className="font-bold text-black text-[32px] lg:text-5xl leading-[1.2] tracking-tight mb-6 !whitespace-pre-line">
              Empowering students with the skills to succeed in the future of
              STEM
            </h2>
            <p className="text-lg text-black mb-10 flex items-center flex-wrap !whitespace-pre-line">
              We provide world-class technical training, leadership development,
              and career guidance—completely free and accessible to students of
              all backgrounds.
            </p>
            <div>
              <a
                href="#"
                className="inline-block px-8 py-3 border-2 border-black rounded-full font-semibold text-base text-black bg-white hover:bg-black hover:text-white transition-colors duration-200"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditBuildingSection;
