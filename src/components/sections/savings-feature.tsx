import React from "react";
import Image from "next/image";

const InfoIcon = () => (
  <button
    aria-label="Savings Pods Disclosures"
    className="inline-flex items-center justify-center ml-1 w-4 h-4 text-black border border-black rounded-full text-[10px] leading-none align-middle"
  >
    &#9432;
  </button>
);

const SavingsFeature = () => {
  return (
    <section className="bg-white py-20 lg:py-[120px] font-sans">
      <div className="container max-w-[1280px] mx-auto px-5 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-y-12 lg:gap-x-20">
          {/* Image Column */}
          <div>
            <Image
              src="/globalcommunity.png"
              alt="Image description"
              width={584}
              height={389}
              className="rounded-2xl w-full h-auto"
            />
          </div>

          {/* Text Column */}
          <div className="text-center lg:text-left">
            <p className="text-[14px] font-semibold text-black tracking-[0.05em] uppercase mb-4">
              COMMUNITY
            </p>

            <h2 className="text-[32px] leading-[1.2] lg:text-[48px] font-bold text-black tracking-[-0.01em] mb-6">
              Join our community of innovators
            </h2>
            <p className="text-lg text-black max-w-[450px] mx-auto lg:mx-0 mb-8 leading-relaxed">
              Connect with ambitious students from around the world. Collaborate
              on projects, share knowledge, and build lasting relationships in
              our global STEM community.
            </p>
            <a
              href="/impact"
              className="inline-block py-3 px-8 text-base font-semibold text-black bg-transparent border-2 border-black rounded-full transition-colors duration-300 hover:bg-black hover:text-white mt-8"
            >
              Join Community
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavingsFeature;
