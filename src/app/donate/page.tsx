import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import {
  Heart,
  BookOpen,
  Users,
  Trophy,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const impactAreas = [
  {
    icon: BookOpen,
    title: "Curriculum & Tech Development",
    description:
      "Building world-class AI learning modules, interactive platforms, and cutting-edge educational tools.",
  },
  {
    icon: Users,
    title: "Chapter Support & Leader Training",
    description:
      "Empowering chapter leaders with resources, mentorship, and professional development programs.",
  },
  {
    icon: Trophy,
    title: "Global Competitions & Hackathons",
    description:
      "Funding prizes, infrastructure, and opportunities for students to showcase their innovations.",
  },
  {
    icon: GraduationCap,
    title: "Scholarships & Microgrants",
    description:
      "Providing financial support to talented students who need it most to pursue their dreams.",
  },
];

export default function Donate() {
  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      <NavigationHeader />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-[#F8F8F8] py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-8 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-[42px] md:text-[72px] lg:text-[80px] font-medium leading-[0.9] tracking-tighter mb-8">
                Empower the Next
                <br />
                10 Million Youth in AI
              </h1>
              <p className="text-lg md:text-xl font-medium text-gray-700 mb-10 max-w-3xl mx-auto">
                Your contribution fuels workshops, hackathons, curriculum
                development, and scholarships worldwide.
              </p>
              <Button
                size="lg"
                className="bg-black text-white rounded-full h-[58px] px-10 text-base font-bold hover:bg-gray-900 transition-colors"
                asChild
              >
                <a href="https://hcb.hackclub.com/donations/start/univa-dev">
                  Donate Now
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* How Donations Are Used */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-5 sm:px-8 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-[32px] md:text-[48px] font-bold tracking-[-2px] leading-tight mb-4">
                Your Impact in Action
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Every dollar directly supports students and creates
                opportunities that change lives
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {impactAreas.map((area, idx) => {
                const IconComponent = area.icon;
                return (
                  <div
                    key={idx}
                    className="bg-[#F8F8F8] rounded-2xl p-8 hover:bg-gray-200 transition-colors"
                  >
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <IconComponent className="h-10 w-10 text-black" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3 text-black">
                          {area.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {area.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-black text-white overflow-hidden relative">
          <div
            className="absolute -bottom-50 left-1/2 w-[200%] h-52 bg-[linear-gradient(67.64deg,_#FFC370_0%,_#FF88A5_100%)] blur-[94px] -translate-x-1/2 z-0"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-screen-lg mx-auto px-5 sm:px-10 py-16 sm:py-24">
            <div className="text-center">
              <h2 className="text-[32px] md:text-[48px] font-bold tracking-[-2px] leading-tight text-white mb-6">
                Every Contribution Makes a Difference
              </h2>
              <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
                Your donation directly supports students worldwide through
                scholarships, events, and educational resources.
              </p>
              <Button
                size="lg"
                className="bg-white text-black rounded-full h-[58px] px-10 text-base font-bold hover:bg-gray-100 transition-colors"
                asChild
              >
                <a href="https://hcb.hackclub.com/donations/start/univa-dev">
                  Donate Now
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
