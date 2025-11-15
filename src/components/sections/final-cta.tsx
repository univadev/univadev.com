"use client";

import { Input } from "@/components/ui/input";

const FinalCta = () => {
  return (
    <section
      id="signUpSection"
      className="bg-black text-white overflow-hidden relative"
    >
      <div
        className="absolute -bottom-50 left-1/2 w-[200%] h-52 bg-[linear-gradient(67.64deg,_#FFC370_0%,_#FF88A5_100%)] blur-[94px] -translate-x-1/2 z-0"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-screen-lg mx-auto px-5 sm:px-10 py-16 sm:py-24">
        <div className="grid grid-cols-4 md:grid-cols-12 gap-x-4 gap-y-10 items-center">
          <div className="col-span-full md:col-span-6">
            <h2 className="text-[32px] md:text-[48px] font-bold tracking-[-2px] leading-tight text-white">
              Ready to lead the future of STEM?
            </h2>
            <p className="text-s mt-4 tracking-tight text-white">
              Join thousands of students building meaningful projects, competing
              in global hackathons, and developing the skills that matter.
            </p>
          </div>
          <div className="col-span-full md:col-start-8 md:col-span-5 flex flex-col gap-4">
            <form className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0">
              <Input
                type="tel"
                placeholder="Enter your email"
                className="bg-white text-black placeholder:text-gray-500 rounded-full pl-5 h-[58px] w-full sm:mr-4 border-none ring-offset-black focus-visible:ring-2 focus-visible:ring-white"
              />
              <button
                type="submit"
                className="bg-black text-white rounded-full h-[58px] px-8 text-base font-bold border-2 border-white hover:bg-white hover:text-black transition-colors w-full sm:w-auto flex-shrink-0 cursor-pointer"
              >
                Get Started
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
