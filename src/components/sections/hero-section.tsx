"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Info } from "lucide-react";

const slides = [
  {
    headline: ["Empowering the next generation of STEM leaders"],
    subtext: "Student-led. Professionally guided. Globally connected.",
    desktopImage:
      "standout.svg",
    mobileImage:
      "standout.svg",
  },
  {
    headline: ["World-class", "hackathons & competitions"],
    subtext: "Compete for real prizes and recognition",
    hasInfo: true,
    desktopImage:
      "hackathon.svg",
    mobileImage:
      "hackathon.svg",
  },
  {
    headline: ["Build skills that", "shape the future"],
    subtext: "Technical excellence meets leadership development",
    hasInfo: true,
    desktopImage:
      "accomplishments.svg",
    mobileImage:
      "accomplishments.svg",
  },
  {
    headline: ["Join a global", "community of innovators"],
    subtext: "Connect with students and professionals worldwide",
    hasInfo: true,
    desktopImage:
      "community.svg",
    mobileImage:
      "community.svg",
  },
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  useEffect(() => {
    setProgressKey((prev) => prev + 1);
  }, [activeIndex]);

  const handleTabClick = (index: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setActiveIndex(index);
    startTimer();
  };

  const activeSlide = slides[activeIndex];

  return (
    <section className="bg-[#F8F8F8] overflow-hidden">
      <div className="container mx-auto px-5 sm:px-8 md:px-12">
        <div className="min-h-[calc(100vh-80px)] md:min-h-0 pt-16 md:pt-24 pb-8 md:pb-24 grid grid-cols-1 md:grid-cols-12 md:gap-x-8 lg:gap-x-12 items-center">
          <div className="md:col-span-7 lg:col-span-6 flex flex-col justify-center">
            {/* Mobile Image Carousel */}
            <div className="md:hidden mb-8 h-[70vw] max-h-[400px] relative">
              {slides.map((slide, index) => (
                <div
                  key={slide.mobileImage}
                  className={`absolute inset-0 transition-opacity duration-500 ${activeIndex === index ? "opacity-100" : "opacity-0"}`}
                >
                  <Image
                    src={slide.mobileImage}
                    alt={`Slide ${index + 1}`}
                    layout="fill"
                    objectFit="contain"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>

            {/* Progress Bars / Tabs */}
            <div className="mb-8 md:mb-12">
              <div className="flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleTabClick(index)}
                    className="flex-1 h-[3px] bg-black/10 rounded-full"
                  >
                    <div
                      className={`h-full bg-black rounded-full ${activeIndex === index ? "animate-progress-fill" : activeIndex > index ? "w-full" : "w-0"}`}
                      key={activeIndex === index ? progressKey : undefined}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Animated Text */}
            <div className="min-h-[190px] md:min-h-[220px] lg:min-h-[260px]">
              <div className="flex flex-col gap-2">
                {activeSlide.headline.map((line, lineIndex) => (
                  <div key={`${activeIndex}-${lineIndex}`}>
                    <h1 className="text-[42px] md:text-[72px] lg:text-[80px] font-medium leading-[1.1] tracking-tighter animate-slide-up !whitespace-pre-line">
                      {line}
                    </h1>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <p className="text-lg md:text-xl font-medium flex items-center animate-slide-up-delay">
                  {activeSlide.subtext}
                </p>
              </div>
            </div>

            {/* CTA Form */}
            <form className="mt-8 lg:mt-10 w-full max-w-md">
              <div className="flex items-center bg-gray-200 rounded-full p-1 relative transition-all focus-within:ring-2 focus-within:ring-black">
                <input
                  type="tel"
                  placeholder="Enter your email"
                  className="flex-grow bg-transparent border-none text-base font-medium placeholder-gray-500 pl-5 pr-2 py-3 focus:ring-0 outline-none"
                />

                <button
                  type="submit"
                  className="bg-black text-white rounded-full text-base font-semibold px-6 py-3 whitespace-nowrap transition-transform hover:scale-105 active:scale-100"
                >
                  Get Started
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-3 px-4">
                Join our mailing list for exclusive updates on hackathons,
                workshops, and leadership programs.
              </p>
            </form>
          </div>

          {/* Desktop Image Carousel */}
          <div className="hidden md:block md:col-span-5 lg:col-span-6 relative h-[600px]">
            {slides.map((slide, index) => (
              <div
                key={slide.desktopImage}
                className={`absolute inset-0 transition-opacity duration-500 ${activeIndex === index ? "opacity-100" : "opacity-0"}`}
              >
                <Image
                  src={slide.desktopImage}
                  alt={`Feature image ${index + 1}`}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                  priority={index === 0}
                  className="rounded-2xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
