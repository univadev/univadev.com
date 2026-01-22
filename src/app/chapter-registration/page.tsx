import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
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
  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      <NavigationHeader />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-[#F8F8F8] py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-8 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-[42px] md:text-[72px] lg:text-[80px] font-medium leading-[0.9] tracking-tighter mb-8">
                Univa Dev Chapters
                <br />
                Transform Your Community
              </h1>
              <p className="text-lg md:text-xl font-medium text-gray-700 mb-6 max-w-3xl mx-auto">
                Join the world's largest youth STEM movement — powered by
                cutting-edge technology, global training programs, and direct
                support from our central HQ.
              </p>
              <p className="text-base text-gray-600 mb-10 max-w-3xl mx-auto">
                Help bring advanced AI education to your school, region, and
                country. Become a catalyst for innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button
                  size="lg"
                  className="bg-black text-white rounded-full h-[58px] px-10 text-base font-bold hover:bg-gray-900 transition-colors"
                  asChild
                >
                  <a href="#apply">Apply to Start a Chapter</a>
                </Button>
                <Button
                  size="lg"
                  className="bg-white text-black rounded-full h-[58px] px-10 text-base font-bold border-2 border-black hover:bg-gray-100 transition-colors"
                  asChild
                >
                  <a href="#contact">Schedule an Info Call</a>
                </Button>
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
          </div>
        </section>

        {/* Why Start a Chapter */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-5 sm:px-8 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-[32px] md:text-[48px] font-bold tracking-[-2px] leading-tight mb-4">
                Why Start a Chapter?
              </h2>
              <p className="text-lg text-gray-600">
                Tech-First. Impact-Driven. Built for Global Scale.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, idx) => {
                const IconComponent = benefit.icon;
                return (
                  <div
                    key={idx}
                    className="bg-[#F8F8F8] rounded-2xl p-8 hover:bg-gray-200 transition-colors"
                  >
                    <div className="mb-6">
                      <IconComponent className="h-10 w-10 text-black" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-black">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
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
                  asChild
                >
                  <a href="https://forms.google.com/your-chapter-application-form">
                    Apply to Start a Chapter
                  </a>
                </Button>
                <Button
                  size="lg"
                  className="text-lg px-12 py-7 bg-black text-white hover:bg-gray-900 border-2 border-white font-semibold transition-all"
                  id="contact"
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
