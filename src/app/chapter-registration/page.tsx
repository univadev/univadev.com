"use client";

import * as React from "react";
import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import { ChapterCreationModal } from "@/components/ChapterCreationModal";
import Image from "next/image";
import { Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const benefits = [
  {
    title: "AI Curriculum Platform",
    description:
      "Access a full suite of interactive AI modules powered by simulations, hands-on projects, real-time analytics, and adaptive learning.",
  },
  {
    title: "Global Community Platform",
    description:
      "Every chapter operates through our unified dashboard: track membership, submit reports, access content, chat with mentors, and monitor progress across the global network.",
  },
  {
    title: "Automated Event Tools",
    description:
      "Host world-class AI workshops, hackathons, bootcamps, and community events using our guided, tech-enabled event templates.",
  },
  {
    title: "Certification System",
    description:
      "Earn recognized certifications for Chapter Leaders, Officers, and Members through our automated learning management engine.",
  },
  {
    title: "Impact Analytics",
    description:
      "Leaders receive monthly insights and growth metrics powered by our internal data systems.",
  },
];

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

  return (
    <div className="min-h-screen bg-m3-surface text-m3-on-surface">
      <ChapterCreationModal
        open={chapterModalOpen}
        onOpenChange={setChapterModalOpen}
      />
      <NavigationHeader disableBackdropBlur />
      <main className="pt-20">
        {/* 1. Hero — bare white, no panel */}
        <section className="pt-16 pb-14 md:pt-24 md:pb-24">
          <div className="mx-auto max-w-[1280px] px-6 md:px-12">
            <div className="max-w-[820px]">
              <p className="m3-label-large mb-4 text-m3-on-surface-variant">
                Chapter Program
              </p>
              <h1 className="m3-display-large mb-6 text-m3-on-surface">
                Transform your community through STEM
              </h1>
              <p className="m3-body-large mb-10 max-w-[560px] text-m3-on-surface-variant">
                Bring advanced AI education to your school, region, or community
                with support from our global team.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  className="m3-btn m3-btn-lg m3-btn-filled w-full sm:w-auto"
                  onClick={() => setChapterModalOpen(true)}
                >
                  Apply to start a chapter
                </button>
                <a
                  href="mailto:univadev0@gmail.com"
                  className="m3-btn m3-btn-lg m3-btn-tonal w-full sm:w-auto"
                >
                  Schedule an info call
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Impact — tonal panel with text + media well */}
        <section className="pb-14 md:pb-24">
          <div className="mx-auto max-w-[1280px] px-6 md:px-12">
            <div className="m3-panel mx-auto max-w-[1180px] bg-m3-surface-container">
              <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <h2 className="m3-headline-large mb-4 max-w-[20ch] text-m3-on-surface">
                    Univa Dev chapters make a groundbreaking impact
                  </h2>
                  <p className="m3-body-large text-m3-on-surface-variant">
                    Powered by cutting-edge technology, global training
                    programs, and direct support from our central HQ.
                  </p>
                </div>
                <div className="lg:col-span-7">
                  <div className="rounded-m3-md bg-m3-surface p-5 lg:rounded-m3-lg lg:p-8">
                    <Image
                      src="/chapters.svg"
                      alt="Univa Dev Chapters"
                      width={800}
                      height={522}
                      className="h-auto w-full grayscale"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Why start a chapter — bare white bento, index numerals instead of icons */}
        <section className="pb-14 md:pb-24">
          <div className="mx-auto max-w-[1280px] px-6 md:px-12">
            <div className="mx-auto mb-14 max-w-[640px] text-center">
              <h2 className="m3-headline-large mb-4 text-m3-on-surface">
                Why start a chapter?
              </h2>
              <p className="m3-body-large text-m3-on-surface-variant">
                Tech-first, impact-driven, and built for global scale.
              </p>
            </div>

            <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-3 md:grid-cols-6 md:gap-4">
              {benefits.map((benefit, idx) => (
                <article
                  key={benefit.title}
                  className={`flex min-h-[216px] flex-col rounded-m3-xl bg-m3-surface-container p-8 ${
                    idx < 2 ? "md:col-span-3" : "md:col-span-2"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className="m3-label-medium mb-6 block text-m3-outline"
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="m3-title-large mb-2 text-m3-on-surface">
                    {benefit.title}
                  </h3>
                  <p className="m3-body-large text-m3-on-surface-variant">
                    {benefit.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 4. What chapters receive — the page's one inverse moment */}
        <section className="pb-14 md:pb-24">
          <div className="mx-auto max-w-[1280px] px-6 md:px-12">
            <div className="m3-panel m3-inverse mx-auto max-w-[1180px] bg-m3-inverse-surface">
              <h2 className="m3-display-small mb-3 text-m3-on-inverse-surface">
                What chapters receive
              </h2>
              <p className="m3-body-large mb-10 text-m3-inverse-on-variant">
                Every approved chapter receives:
              </p>
              <ul className="grid grid-cols-1 gap-x-12 gap-y-5 md:grid-cols-2">
                {chapterBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <Check
                      aria-hidden="true"
                      className="mt-1 h-[18px] w-[18px] shrink-0 text-white"
                      strokeWidth={2.25}
                    />
                    <span className="m3-body-large text-[#e5e5e5]">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 5. FAQ — editorial split: static rail + shape-morph accordion */}
        <section className="pb-14 md:pb-24">
          <div className="mx-auto max-w-[1280px] px-6 md:px-12">
            <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-4">
                <h2 className="m3-headline-large mb-4 text-m3-on-surface">
                  Frequently asked questions
                </h2>
                <p className="m3-body-large text-m3-on-surface-variant">
                  Everything you need to know about starting a chapter.
                </p>
              </div>

              <div className="lg:col-span-7 lg:col-start-6">
                <Accordion type="single" collapsible className="space-y-2">
                  {faqs.map((faq, idx) => (
                    <AccordionItem
                      key={faq.question}
                      value={`item-${idx}`}
                      className="m3-faq-item border-b-0 px-6"
                    >
                      <AccordionTrigger className="m3-faq-trigger m3-title-medium min-h-16 cursor-pointer items-center text-left text-[1.0625rem] text-m3-on-surface hover:no-underline rounded-2xl focus-visible:ring-0 focus-visible:outline-solid focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-m3-primary [&>svg]:hidden">
                        {faq.question}
                        <span aria-hidden="true" className="m3-faq-plus">
                          +
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="m3-body-large pb-6 text-m3-on-surface-variant">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Final CTA — emphasized tonal panel */}
        <section id="apply" className="pb-14 md:pb-24">
          <div className="mx-auto max-w-[1280px] px-6 md:px-12">
            <div className="m3-panel mx-auto max-w-[1180px] bg-m3-surface-container-high text-center">
              <h2 className="m3-display-small mb-4 text-m3-on-surface">
                Ready to start?
              </h2>
              <p className="m3-body-large mx-auto mb-10 max-w-[520px] text-m3-on-surface-variant">
                Apply now to launch your chapter and bring world-class STEM and
                AI education to your community.
              </p>
              <div className="flex flex-col justify-center gap-3 sm:flex-row">
                <button
                  type="button"
                  className="m3-btn m3-btn-lg m3-btn-filled w-full sm:w-auto"
                  onClick={() => setChapterModalOpen(true)}
                >
                  Apply to start a chapter
                </button>
                <a
                  href="mailto:univadev0@gmail.com"
                  className="m3-btn m3-btn-lg m3-btn-white w-full sm:w-auto"
                >
                  Schedule an info call
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
