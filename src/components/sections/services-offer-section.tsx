"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Code, Globe, TrendingUp } from "lucide-react";

const serviceOffers = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Build your digital identity from the ground up. We create professional, production-grade websites that build trust and engage your audience.",
  },
  {
    icon: Code,
    title: "Custom Software Tools",
    description:
      "Develop tailored software solutions that streamline your operations and amplify your impact. From concept to deployment.",
  },
  {
    icon: TrendingUp,
    title: "Design & UX Refinement",
    description:
      "Transform AI-generated designs into polished, professional interfaces that increase user engagement and build credibility.",
  },
];

const serviceRevealLayouts = [
  {
    offerIndex: 0,
    position: "left-1/2 top-2 w-[54%]",
    visibleMotion: "translate3d(-50%, 0, 0)",
    enterMotion: "translate3d(-50%, 1.5rem, 0) scale(0.98)",
  },
  {
    offerIndex: 1,
    position: "left-1/2 top-2 w-[54%]",
    visibleMotion: "translate3d(-50%, 0, 0)",
    enterMotion: "translate3d(-50%, 1.5rem, 0) scale(0.98)",
  },
  {
    offerIndex: 2,
    position: "left-1/2 top-2 w-[54%]",
    visibleMotion: "translate3d(-50%, 0, 0)",
    enterMotion: "translate3d(-50%, 1.5rem, 0) scale(0.98)",
  },
] as const;

function ServiceOfferCard({
  offer,
  settled = false,
}: {
  offer: (typeof serviceOffers)[number];
  settled?: boolean;
}) {
  const IconComponent = offer.icon;

  return (
    <article
      className={`service-offer-card group relative isolate flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-[0_1px_0_rgba(15,23,42,0.03)] ${
        settled ? "min-h-[330px] p-8 lg:min-h-[360px] lg:p-9" : "min-h-[300px] p-9"
      }`}
    >
      <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-lg bg-[#ff7f50]/10 text-[#ff7f50] transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105">
        <IconComponent aria-hidden="true" className="h-8 w-8" strokeWidth={2.4} />
      </div>
      <h3 className="mb-5 text-xl font-bold text-gray-950">{offer.title}</h3>
      <p className="mb-0 text-base leading-relaxed text-gray-600">
        {offer.description}
      </p>
    </article>
  );
}

export default function ServicesOfferSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [revealStep, setRevealStep] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    let frame = 0;

    const updateRevealStep = () => {
      frame = 0;

      if (window.innerWidth < 768) {
        setRevealStep(3);
        return;
      }

      const rect = section.getBoundingClientRect();
      const scrollDistance = Math.max(
        1,
        section.offsetHeight - window.innerHeight,
      );
      const progress = Math.min(Math.max(-rect.top / scrollDistance, 0), 1);
      const nextRevealStep =
        progress < 0.25 ? 0 : progress < 0.5 ? 1 : progress < 0.75 ? 2 : 3;

      setRevealStep((currentStep) =>
        currentStep === nextRevealStep ? currentStep : nextRevealStep,
      );
    };

    const requestUpdate = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(updateRevealStep);
    };

    updateRevealStep();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      data-visible={isVisible}
      className="service-offer-section relative bg-gray-50 py-24 md:h-[380vh] md:py-0"
    >
      <div className="relative md:sticky md:top-20 md:flex md:min-h-[calc(100svh-5rem)] md:items-center md:py-10">
        <div className="container relative z-10 mx-auto px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <div
              className="service-offer-heading mb-16 text-center md:mb-12"
              style={{ "--service-offer-delay": "0ms" } as CSSProperties}
            >
              <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
                What We Offer
              </h2>
              <p className="text-xl font-normal text-gray-600">
                Comprehensive tech solutions for nonprofits
              </p>
            </div>

            <div className="relative mx-auto hidden min-h-[380px] max-w-6xl md:block lg:min-h-[410px]">
              <div
                className={`absolute inset-x-0 top-0 min-h-[330px] transition-opacity duration-300 ${
                  revealStep === 3
                    ? "pointer-events-none opacity-0"
                    : "opacity-100"
                }`}
              >
                {serviceRevealLayouts.map((layout) => {
                  const offer = serviceOffers[layout.offerIndex];
                  const style = {
                    "--service-offer-enter-motion": layout.enterMotion,
                    "--service-offer-visible-motion": layout.visibleMotion,
                  } as CSSProperties;

                  return (
                    <div
                      key={offer.title}
                      data-active={revealStep === layout.offerIndex}
                      className={`service-freeze-card-shell absolute ${layout.position}`}
                      style={style}
                    >
                      <ServiceOfferCard offer={offer} />
                    </div>
                  );
                })}
              </div>

              <div
                data-active={revealStep === 3}
                className="service-final-grid absolute inset-x-0 top-0 mx-auto grid max-w-6xl grid-cols-3 gap-6"
              >
                {serviceOffers.map((offer, idx) => (
                  <div
                    key={offer.title}
                    style={
                      { "--service-offer-delay": `${idx * 80}ms` } as CSSProperties
                    }
                  >
                    <ServiceOfferCard offer={offer} settled />
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:hidden">
              {serviceOffers.map((offer, idx) => (
                <div
                  key={offer.title}
                  className="service-mobile-card-shell"
                  style={
                    { "--service-offer-delay": `${140 + idx * 90}ms` } as CSSProperties
                  }
                >
                  <ServiceOfferCard offer={offer} settled />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
