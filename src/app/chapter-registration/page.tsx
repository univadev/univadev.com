"use client";

import * as React from "react";
import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import { ChapterCreationModal } from "@/components/ChapterCreationModal";
import Image from "next/image";
import {
  Globe,
  Cpu,
  Calendar,
  Award,
  BarChart3,
  Check,
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

function BenefitCard({ benefit }: { benefit: (typeof benefits)[number] }) {
  const IconComponent = benefit.icon;

  return (
    <article className="flex h-full flex-col rounded-m3-md border border-m3-outline-variant bg-m3-surface-container-lowest p-6 md:p-7">
      <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-m3-primary-container text-m3-on-primary-container">
        <IconComponent aria-hidden="true" className="h-5 w-5" strokeWidth={2} />
      </span>
      <h3 className="m3-title-large mb-2 text-m3-on-surface">{benefit.title}</h3>
      <p className="m3-body-large text-m3-on-surface-variant">
        {benefit.description}
      </p>
    </article>
  );
}

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
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-8 md:px-12">
            <div className="max-w-3xl">
              <p className="m3-label-large mb-4 text-m3-on-surface-variant">
                Chapter Program
              </p>
              <h1 className="m3-display-large mb-6 text-m3-on-surface">
                Transform your community through STEM
              </h1>
              <p className="m3-body-large mb-10 max-w-2xl text-m3-on-surface-variant">
                Bring advanced AI education to your school, region, or community
                with support from our global team.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  className="m3-btn m3-btn-lg m3-btn-filled"
                  onClick={() => setChapterModalOpen(true)}
                >
                  Apply to start a chapter
                </button>
                <a
                  href="mailto:univadev0@gmail.com"
                  className="m3-btn m3-btn-lg m3-btn-outlined"
                >
                  Schedule an info call
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-m3-outline-variant bg-m3-surface-container-low py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-8 md:px-12">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="m3-headline-large mb-4 text-m3-on-surface">
                Univa Dev chapters make a groundbreaking impact
              </h2>
              <p className="m3-body-large text-m3-on-surface-variant">
                Powered by cutting-edge technology, global training programs, and
                direct support from our central HQ.
              </p>
            </div>
            <div className="mx-auto max-w-3xl">
              <Image
                src="/chapters.svg"
                alt="Univa Dev Chapters"
                width={800}
                height={522}
                className="h-auto w-full"
                priority
              />
            </div>
          </div>
        </section>

        <section className="border-t border-m3-outline-variant py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-8 md:px-12">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="m3-headline-large mb-4 text-m3-on-surface">
                Why start a chapter?
              </h2>
              <p className="m3-body-large text-m3-on-surface-variant">
                Tech-first, impact-driven, and built for global scale.
              </p>
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2">
              {benefits.map((benefit, idx) => (
                <div
                  key={benefit.title}
                  className={
                    idx === benefits.length - 1
                      ? "md:col-span-2 md:mx-auto md:max-w-[calc(50%-0.5rem)]"
                      : ""
                  }
                >
                  <BenefitCard benefit={benefit} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-m3-outline-variant bg-m3-surface-container-low py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-5xl">
              <div className="mb-12 text-center">
                <h2 className="m3-headline-large mb-4 text-m3-on-surface">
                  What chapters receive
                </h2>
                <p className="m3-body-large text-m3-on-surface-variant">
                  Everything you need to lead with impact.
                </p>
              </div>

              <div className="rounded-m3-lg bg-m3-surface-container-highest p-8 md:p-10">
                <p className="m3-title-medium mb-8 text-m3-on-surface">
                  Every approved chapter receives
                </p>

                <ul className="grid grid-cols-1 gap-x-8 gap-y-5 md:grid-cols-2">
                  {chapterBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-m3-primary text-m3-on-primary">
                        <Check
                          aria-hidden="true"
                          className="h-3.5 w-3.5"
                          strokeWidth={2.5}
                        />
                      </span>
                      <span className="m3-body-large text-m3-on-surface-variant">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-m3-outline-variant py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-3xl">
              <div className="mb-12 text-center">
                <h2 className="m3-headline-large mb-4 text-m3-on-surface">
                  Frequently asked questions
                </h2>
                <p className="m3-body-large text-m3-on-surface-variant">
                  Everything you need to know about starting a chapter.
                </p>
              </div>

              <Accordion type="single" collapsible className="space-y-2">
                {faqs.map((faq, idx) => (
                  <AccordionItem
                    key={faq.question}
                    value={`item-${idx}`}
                    className="overflow-hidden rounded-m3-md border border-m3-outline-variant bg-m3-surface-container-lowest px-6 last:border-b"
                  >
                    <AccordionTrigger className="m3-title-medium cursor-pointer py-5 text-left text-m3-on-surface hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="m3-body-large pb-5 text-m3-on-surface-variant">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section
          id="apply"
          className="border-t border-m3-outline-variant bg-m3-surface-container-low py-16 md:py-24"
        >
          <div className="container mx-auto px-5 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-3xl rounded-m3-xl bg-m3-surface-container-highest p-10 text-center md:p-14">
              <h2 className="m3-headline-large mb-4 text-m3-on-surface">
                Ready to start?
              </h2>
              <p className="m3-body-large mb-8 text-m3-on-surface-variant">
                Apply now to launch your chapter and bring world-class STEM and
                AI education to your community.
              </p>
              <div className="flex flex-col justify-center gap-3 sm:flex-row">
                <button
                  type="button"
                  className="m3-btn m3-btn-lg m3-btn-filled"
                  onClick={() => setChapterModalOpen(true)}
                >
                  Apply to start a chapter
                </button>
                <a
                  href="mailto:univadev0@gmail.com"
                  className="m3-btn m3-btn-lg m3-btn-outlined"
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
