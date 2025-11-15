import React from "react";
import Image from "next/image";

const TeenBankingSection = () => {
  return (
    <section className="bg-white py-20 lg:py-[120px] font-sans">
      <div className="container max-w-[1280px] mx-auto px-5 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-y-12 lg:gap-x-20">
          {/* Image Column */}
          <div>
            <Image
              src="/vision.png"
              alt="Image description"
              width={584}
              height={389}
              className="rounded-2xl w-full h-auto"
            />
          </div>

          {/* Text Column */}
          <div className="text-center lg:text-left">
            <p className="text-[14px] font-semibold text-black tracking-[0.05em] uppercase mb-4">
              OUR VISION
            </p>

            <h2 className="text-[32px] leading-[1.2] lg:text-[48px] font-bold text-black tracking-[-0.01em] mb-6">
              A future where every student can innovate
            </h2>
            <p className="text-lg text-black max-w-[450px] mx-auto lg:mx-0 mb-8 leading-relaxed">
              We believe every student deserves the chance to build meaningful
              projects and make a positive impact on the world through
              technology—regardless of background or resources.
            </p>
            {/*<a
              href="/about"
              className="inline-block px-8 py-3 text-base font-semibold text-black border-2 border-black rounded-full transition-colors duration-300 ease-in-out hover:bg-black hover:text-white"
            >
              Learn More
            </a>*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeenBankingSection;
