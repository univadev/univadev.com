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
    <section className="bg-white py-20 md:py-32">
      <div className="container">
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-x-4 sm:gap-x-10 md:gap-x-4 items-center">
          <div className="col-span-full md:col-span-7 relative">
            <figure className="aspect-square">
              <Image
                src="/abt.png"
                alt="Image description"
                width={588}
                height={588}
                className="object-cover object-left-top h-full w-full rounded-[30px]"
              />
            </figure>
            <div className="absolute w-[60%] sm:w-[50%] md:w-[60%] bottom-0 right-0 sm:right-6 md:right-0">
              <Image
                src="univadev.svg"
                alt="Image description"
                width={374}
                height={288}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="col-span-full md:col-start-9 md:col-span-4 mt-8 md:mt-0">
            <p className="text-sm font-semibold tracking-wider uppercase text-black mb-4">
              Connect
            </p>
            <h2 className="text-[32px] md:text-[48px] font-bold text-black leading-[1.2] tracking-[-0.01em] mb-4">
              Connect with 1M+
              <br />
              ambitious youth
            </h2>
            <p className="text-lg text-black leading-relaxed">
              Really fitting text that resonates with a global audience and
              highlights our values
            </p>
            <a
              href="/save"
              className="inline-block py-3 px-8 text-base font-semibold text-black bg-transparent border-2 border-black rounded-full transition-colors duration-300 hover:bg-black hover:text-white mt-8"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavingsFeature;
