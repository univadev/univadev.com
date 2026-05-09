"use client";

import * as React from "react";
import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import { ChapterCreationModal } from "@/components/ChapterCreationModal";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Globe,
  Cpu,
  Calendar,
  Award,
  BarChart3,
  BookOpen,
  Users,
  Rocket,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const benefits = [
  {
    icon: Cpu,
    title: "AI Curriculum Platform",
    description:
      "Access a full suite of interactive AI modules powered by simulations, hands-on projects, real-time analytics, and adaptive learning.",
  },
  {
    icon: Globe,
    title: "Global Community Platform",
    description:
      "Every chapter operates through our unified dashboard: track membership, submit reports, access content, chat with mentors, and monitor progress across the global network.",
  },
  {
    icon: Calendar,
    title: "Automated Event Tools",
    description:
      "Host world-class AI workshops, hackathons, bootcamps, and community events using our guided, tech-enabled event templates.",
  },
  {
    icon: Award,
    title: "Certification System",
    description:
      "Earn recognized certifications for Chapter Leaders, Officers, and Members through our automated learning management engine.",
  },
  {
    icon: BarChart3,
    title: "Impact Analytics",
    description:
      "Leaders receive monthly insights and growth metrics powered by our internal data systems.",
  },
];

const benefitRevealLayouts = [
  {
    benefitIndex: 0,
    step: 0,
    position: "left-0 top-0 w-[46%]",
    visibleMotion: "translate3d(0, 0, 0) rotate(-1deg)",
    enterMotion: "translate3d(-2.5rem, -1rem, 0) scale(0.98) rotate(-1deg)",
  },
  {
    benefitIndex: 1,
    step: 0,
    position: "right-0 top-16 w-[46%]",
    visibleMotion: "translate3d(0, 0, 0) rotate(1deg)",
    enterMotion: "translate3d(2.5rem, 1rem, 0) scale(0.98) rotate(1deg)",
  },
  {
    benefitIndex: 2,
    step: 1,
    position: "right-0 top-0 w-[46%]",
    visibleMotion: "translate3d(0, 0, 0) rotate(1deg)",
    enterMotion: "translate3d(3rem, -1rem, 0) scale(0.98) rotate(1deg)",
  },
  {
    benefitIndex: 3,
    step: 1,
    position: "left-0 top-16 w-[46%]",
    visibleMotion: "translate3d(0, 0, 0) rotate(-1deg)",
    enterMotion: "translate3d(-3rem, 1rem, 0) scale(0.98) rotate(-1deg)",
  },
  {
    benefitIndex: 4,
    step: 2,
    position: "left-0 top-0 w-[52%]",
    visibleMotion: "translate3d(0, 0, 0) rotate(0deg)",
    enterMotion: "translate3d(-2.5rem, 1.5rem, 0) scale(0.98)",
  },
] as const;

function BenefitCard({
  benefit,
  className = "",
  style,
  ariaHidden,
  compact = false,
}: {
  benefit: (typeof benefits)[number];
  className?: string;
  style?: React.CSSProperties;
  ariaHidden?: boolean;
  compact?: boolean;
}) {
  const IconComponent = benefit.icon;

  return (
    <div
      aria-hidden={ariaHidden}
      className={`rounded-[1.25rem] border border-black/[0.04] bg-[#F8F8F8] shadow-[0_18px_60px_rgba(0,0,0,0.04)] transition-all duration-700 ease-out hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_70px_rgba(0,0,0,0.08)] ${
        compact ? "p-4 md:min-h-[150px]" : "p-6 md:min-h-[220px] md:p-7"
      } ${className}`}
      style={style}
    >
      <div
        className={`flex items-center justify-center rounded-full bg-white shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)] ${
          compact ? "mb-2 h-9 w-9" : "mb-5 h-12 w-12"
        }`}
      >
        <IconComponent
          className={compact ? "h-5 w-5 text-black" : "h-7 w-7 text-black"}
        />
      </div>
      <h3
        className={
          compact
            ? "mb-1.5 text-base font-bold leading-tight text-black"
            : "mb-3 text-xl font-bold text-black"
        }
      >
        {benefit.title}
      </h3>
      <p
        className={
          compact
            ? "m-0 text-[13px] leading-[1.4] text-gray-700"
            : "m-0 text-[15px] leading-relaxed text-gray-700 md:text-base"
        }
      >
        {benefit.description}
      </p>
    </div>
  );
}

const chapterBenefits = [
  "Full access to our AI curriculum & workshop toolkits",
  "Exclusive chapter portal with analytics, content, and support",
  "AI project templates & starter projects",
  "Monthly leadership training sessions",
  "Early access to global competitions & hackathons",
  "Eligibility for technology and microgrant funding",
  "Official branding materials & design assets",
  "Internationally recognized chapter certificate",
];

const faqs = [
  {
    question: "How long does chapter approval take?",
    answer:
      "Most applications are reviewed within 3–7 business days. High-demand periods may require additional time.",
  },
  {
    question: "What if my school doesn't allow clubs?",
    answer:
      "You can start a community-based, virtual, or regional chapter instead. We support multiple chapter formats.",
  },
  {
    question: "Do I need a teacher sponsor?",
    answer:
      "A sponsor is recommended for school-based chapters, but optional for community or independent chapters.",
  },
  {
    question: "Is it free to start a chapter?",
    answer:
      "Yes, starting and running a chapter is completely free. Optional paid add-ons (equipment kits, merch, etc.) are available but never required.",
  },
  {
    question: "How do chapters get funding?",
    answer:
      "Chapters gain access to sponsorship templates, fundraising guides, and internal microgrant opportunities.",
  },
  {
    question: "How do virtual chapters work?",
    answer:
      "Virtual chapters host online meetings, workshops, and events using our platform tools and resources.",
  },
];

export default function ChapterRegistration() {
  const [chapterModalOpen, setChapterModalOpen] = React.useState(false);
  const [benefitRevealStep, setBenefitRevealStep] = React.useState(0);
  const benefitsScrollRef = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    const section = benefitsScrollRef.current;

    if (!section) {
      return;
    }

    let frame = 0;

    const updateBenefitReveal = () => {
      frame = 0;

      if (window.innerWidth < 768) {
        setBenefitRevealStep(0);
        return;
      }

      const rect = section.getBoundingClientRect();
      const scrollDistance = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = Math.min(Math.max(-rect.top / scrollDistance, 0), 1);
      const nextRevealStep =
        progress < 0.25 ? 0 : progress < 0.5 ? 1 : progress < 0.75 ? 2 : 3;

      setBenefitRevealStep((currentStep) =>
        currentStep === nextRevealStep ? currentStep : nextRevealStep,
      );
    };

    const requestUpdate = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(updateBenefitReveal);
    };

    updateBenefitReveal();
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
    <div className="min-h-screen bg-[#F8F8F8]">
      <ChapterCreationModal
        open={chapterModalOpen}
        onOpenChange={setChapterModalOpen}
      />
      <NavigationHeader disableBackdropBlur />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative isolate h-[calc(100vh-5rem)] min-h-[560px] w-full overflow-hidden bg-[#F8F8F8]">
          <video
            className="absolute left-1/2 top-1/2 -z-20 h-full w-[108%] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source
              src="/videos/chapter-registration-hero.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-black/45 via-black/20 to-transparent" />
          <div className="absolute bottom-8 left-5 right-5 sm:left-8 sm:right-auto md:bottom-12 md:left-12">
            <div className="max-w-5xl">
              <p className="mb-6 max-w-5xl font-['Cormorant_Garamond',Georgia,serif] text-[32px] font-semibold leading-none text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)] sm:whitespace-nowrap md:text-[44px] lg:text-[54px]">
                Transform your{" "}
                <span className="text-[#ffd166]">community</span> through{" "}
                <span className="text-[#ffd166]">STEM</span>
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="bg-black text-white rounded-full h-[58px] px-10 text-base font-bold hover:bg-gray-900 transition-colors"
                  onClick={() => setChapterModalOpen(true)}
                >
                  Apply to Start a Chapter
                </Button>
                <Button
                  size="lg"
                  className="bg-white text-black rounded-full h-[58px] px-10 text-base font-bold border-2 border-black hover:bg-gray-100 transition-colors"
                  asChild
                >
                  <a href="mailto:univadev0@gmail.com">Schedule an Info Call</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F8F8F8] py-12 md:py-16">
          <div className="container mx-auto px-5 sm:px-8 md:px-12">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-[42px] md:text-[72px] lg:text-[80px] font-medium leading-[0.9] tracking-tighter mb-8">
                Univa Dev Chapters Makes A Groundbreaking Impact
              </h1>
              <p className="text-lg md:text-xl font-medium text-gray-700 mb-6 max-w-3xl mx-auto">
                Powered by
                cutting-edge technology, global training programs, and direct
                support from our central HQ.
              </p>
              <p className="text-base text-gray-600 mb-10 max-w-3xl mx-auto">
                Help bring advanced AI education to your school, region, and
                country. Become a catalyst for innovation.
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <Image
                src="/chapters.svg"
                alt="Univa Dev Chapters"
                width={800}
                height={522}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </section>

        {/* Why Start a Chapter */}
        <section ref={benefitsScrollRef} className="relative hidden bg-white md:block md:h-[420vh]">
          <div className="md:sticky md:top-20 md:flex md:min-h-[calc(100svh-5rem)] md:items-center md:py-10">
            <div className="container mx-auto px-5 sm:px-8 md:px-12">
              <div className="mx-auto mb-8 max-w-4xl text-center">
                <h2 className="mb-4 text-[32px] font-bold leading-tight tracking-[-2px] md:text-[48px]">
                  Why Start a Chapter?
                </h2>
                <p className="text-lg text-gray-600">
                  Tech-First. Impact-Driven. Built for Global Scale.
                </p>
              </div>

              <div className="relative mx-auto hidden min-h-[560px] max-w-5xl md:block lg:min-h-[520px]">
                <div
                  className={`absolute inset-x-0 top-0 min-h-[360px] transition-opacity duration-300 lg:min-h-[380px] ${
                    benefitRevealStep === 3
                      ? "pointer-events-none opacity-0"
                      : "opacity-100"
                  }`}
                >
                  {benefitRevealStep < 3 &&
                    benefitRevealLayouts
                      .filter((layout) => layout.step === benefitRevealStep)
                      .map((layout, idx) => (
                        <BenefitCard
                          key={layout.benefitIndex}
                          benefit={benefits[layout.benefitIndex]}
                          className={`absolute ${layout.position} animate-[benefit-card-enter_700ms_ease-out_both]`}
                          style={
                            {
                              animationDelay: idx % 2 === 1 ? "110ms" : "0ms",
                              "--benefit-card-enter": layout.enterMotion,
                              "--benefit-card-visible": layout.visibleMotion,
                            } as React.CSSProperties
                          }
                        />
                      ))}
                </div>

                <div
                  className={`absolute inset-x-0 top-0 mx-auto grid max-w-5xl grid-cols-2 gap-4 transition-all duration-700 ease-out ${
                    benefitRevealStep === 3
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none translate-y-8 opacity-0"
                  }`}
                >
                  {benefits.map((benefit, idx) => (
                    <BenefitCard
                      key={idx}
                      benefit={benefit}
                      compact
                      className={
                        idx === benefits.length - 1
                          ? "col-span-2 mx-auto w-[calc(50%-0.5rem)]"
                          : ""
                      }
                      style={{
                        transitionDelay:
                          benefitRevealStep === 3 ? `${idx * 75}ms` : "0ms",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:hidden">
          <div className="container mx-auto px-5 sm:px-8 md:px-12">
            <div className="mx-auto mb-10 max-w-4xl text-center md:hidden">
              <h2 className="mb-4 text-[32px] font-bold leading-tight tracking-[-2px]">
                Why Start a Chapter?
              </h2>
              <p className="text-lg text-gray-600">
                Tech-First. Impact-Driven. Built for Global Scale.
              </p>
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
              {benefits.map((benefit, idx) => (
                <BenefitCard
                  key={idx}
                  benefit={benefit}
                  className={
                    idx === benefits.length - 1
                      ? "md:col-span-2 md:mx-auto md:w-[calc(50%-0.75rem)]"
                      : ""
                  }
                />
              ))}
            </div>
          </div>
        </section>

        {/* What Chapters Receive */}
        <section className="py-24 lg:py-32 bg-gradient-to-t from-neutral-100 to-white">
          <div className="container mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900">
                  What Chapters Receive
                </h2>
                <p className="text-xl md:text-2xl text-neutral-600 font-light">
                  Everything You Need to Lead With Impact
                </p>
              </div>

              <div className="rounded-3xl border-2 border-neutral-300 p-10 md:p-14">
                <p className="text-xl text-neutral-700 mb-10 font-medium">
                  Every approved chapter receives:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {chapterBenefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="mt-1 p-0.5 bg-gradient-to-b from-black to-gray-600 rounded-full flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-lg text-neutral-700 leading-relaxed">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-neutral-600">
                  Everything you need to know about starting a chapter
                </p>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`item-${idx}`}
                    className="bg-neutral-50 border-2 border-neutral-100 rounded-xl px-6 hover:border-neutral-300 transition-colors"
                  >
                    <AccordionTrigger className="cursor-pointer text-left text-lg font-semibold hover:no-underline text-neutral-900 py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-neutral-600 text-base leading-relaxed pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section
          id="apply"
          className="relative py-28 lg:py-40 bg-gray-800 overflow-hidden"
        >
          {/* Subtle pattern overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/univadev.svg')] bg-cover bg-center mix-blend-multiply" />
          <div className="container mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
                Ready to Start?
              </h2>
              <p className="text-2xl md:text-3xl text-neutral-200 mb-6 leading-relaxed font-light">
                Apply Now to Launch Your Chapter
              </p>
              <p className="text-lg md:text-xl text-neutral-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Bring world-class STEM and AI education to your community!
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Button
                  size="lg"
                  className="text-lg px-12 py-7 bg-white text-black hover:bg-gray-100 font-semibold shadow-2xl hover:shadow-3xl transition-all"
                  onClick={() => setChapterModalOpen(true)}
                >
                  Apply to Start a Chapter
                </Button>
                <Button
                  size="lg"
                  className="text-lg px-12 py-7 bg-black text-white hover:bg-gray-900 border-2 border-white font-semibold transition-all"
                  asChild
                >
                  <a href="mailto:univadev0@gmail.com">Schedule an Info Call</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
