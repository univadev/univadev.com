import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import {
  Lock,
  Brain,
  Layers,
  Network,
  Calendar,
  TrendingUp,
  Shield,
  Award,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const portalFeatures = [
  {
    icon: Brain,
    title: "Leadership Intelligence",
    description:
      "Tools designed to amplify your chapter's impact — tracking growth, engagement, and regional influence.",
  },
  {
    icon: Layers,
    title: "Curriculum Engine",
    description:
      "A living ecosystem of AI modules, workshops, and project pathways unlocked once your chapter is approved.",
  },
  {
    icon: Network,
    title: "Global Network",
    description:
      "Connect with other leaders, access private forums, and participate in international leadership circles.",
  },
  {
    icon: Calendar,
    title: "Event Infrastructure",
    description:
      "Professional templates and frameworks used to host world-class bootcamps, hackathons, and summits.",
  },
  {
    icon: TrendingUp,
    title: "Performance Analytics",
    description:
      "A powerful dashboard mapping your chapter's progress and positioning on the global leaderboard.",
  },
];

export default function ChapterResources() {
  return (
    <div className="min-h-screen bg-[#F8F8F8] text-black">
      <NavigationHeader />
      <main className="pt-20">
        {/* Hero Section - Minimal, Mysterious, Premium */}
        <section className="relative py-32 lg:py-48 bg-gradient-to-b from-black via-neutral-950 to-black overflow-hidden">
          {/* Animated gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-10 flex justify-center">
                <div className="p-6">
                  <Lock className="h-16 w-16 text-white" />
                </div>
              </div>
              <div className="inline-block mb-6 px-5 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
                <span className="text-sm font-semibold text-white/90 tracking-widest uppercase">
                  Exclusive Access
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] text-white">
                The Global Chapter Portal
              </h1>
              <p className="text-xl md:text-2xl text-neutral-300 mb-6 leading-relaxed font-light">
                Where global youth leaders access the tools, intelligence, and
                technology powering our movement.
              </p>
              <p className="text-base text-neutral-400 mb-14 tracking-wide">
                Available only to verified Chapter Leaders.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Button
                  size="lg"
                  className="text-lg px-12 py-7 bg-white text-neutral-900 hover:bg-neutral-100 font-semibold shadow-2xl hover:shadow-3xl transition-all"
                  asChild
                >
                  <a href="#portal" className="flex items-center gap-2">
                    Access Chapter Resources
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* A Glimpse Into the Portal */}
        <section className="py-24 lg:py-32 bg-black">
          <div className="container mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  A Glimpse Into the Portal
                </h2>
                <p className="text-xl text-neutral-400 font-light">
                  Sleek tools. Powerful systems. Reserved for leaders.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portalFeatures.map((feature, idx) => {
                  const IconComponent = feature.icon;
                  return (
                    <div
                      key={idx}
                      className="group bg-white/5 backdrop-blur-md border-2 border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                    >
                      <div className="mb-6 p-4 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-xl w-fit group-hover:from-blue-600/30 group-hover:to-cyan-600/30 transition-all duration-300">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-white">
                        {feature.title}
                      </h3>
                      <p className="text-neutral-300 leading-relaxed text-base">
                        {feature.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* The Leader Advantage */}
        <section className="py-24 lg:py-32 bg-black">
          <div className="container mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  The Leader Advantage
                </h2>
                <p className="text-xl text-neutral-400 font-light">
                  Elite access. Global impact. Exclusive opportunities.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="mb-8 flex justify-center">
                    <div className="p-6 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-md border-2 border-white/10 rounded-2xl group-hover:from-blue-600/30 group-hover:to-cyan-600/30 group-hover:border-white/20 transition-all duration-300">
                      <Shield className="h-12 w-12 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-5 text-white">
                    Exclusivity On Purpose
                  </h3>
                  <p className="text-neutral-300 leading-relaxed text-base">
                    Not everyone gets access.
                    <br />
                    <span className="text-neutral-400">
                      Only official chapter leaders can enter the portal — and
                      that's what keeps the community world-class.
                    </span>
                  </p>
                </div>

                <div className="text-center group">
                  <div className="mb-8 flex justify-center">
                    <div className="p-6 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-md border-2 border-white/10 rounded-2xl group-hover:from-blue-600/30 group-hover:to-cyan-600/30 group-hover:border-white/20 transition-all duration-300">
                      <Award className="h-12 w-12 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-5 text-white">
                    Global Recognition
                  </h3>
                  <p className="text-neutral-300 leading-relaxed text-base">
                    <span className="text-neutral-400">
                      Leaders receive formal status, certificates, and
                      opportunities only available through the chapter system.
                    </span>
                  </p>
                </div>

                <div className="text-center group">
                  <div className="mb-8 flex justify-center">
                    <div className="p-6 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-md border-2 border-white/10 rounded-2xl group-hover:from-blue-600/30 group-hover:to-cyan-600/30 group-hover:border-white/20 transition-all duration-300">
                      <Sparkles className="h-12 w-12 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-5 text-white">
                    Early Access to Everything
                  </h3>
                  <p className="text-neutral-300 leading-relaxed text-base">
                    Competitions. Grants. Summits.
                    <br />
                    <span className="text-neutral-400">
                      All released to chapters first — sometimes only to
                      chapters.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Lock Screen Effect */}
        <section
          id="portal"
          className="relative py-28 lg:py-40 bg-gradient-to-b from-neutral-950 via-black to-neutral-950 overflow-hidden"
        >
          {/* Subtle glow effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl" />

          <div className="container mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-md border-2 border-white/10 rounded-3xl p-10 md:p-14 shadow-2xl">
                <p className="text-xl text-neutral-200 mb-8 leading-relaxed font-light">
                  Out of respect for our leaders, chapter materials are not
                  displayed publicly.
                </p>
                <p className="text-lg text-neutral-300 mb-10 leading-relaxed">
                  To access the curriculum, toolkits, leadership training, and
                  portal technologies, you must be:
                </p>

                <ul className="space-y-5 mb-12">
                  <li className="flex items-start gap-4">
                    <div className="mt-1.5 p-2 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-full flex-shrink-0">
                      <div className="h-2 w-2 bg-white rounded-full" />
                    </div>
                    <span className="text-xl text-white font-medium">
                      An approved Chapter Founder
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-1.5 p-2 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-full flex-shrink-0">
                      <div className="h-2 w-2 bg-white rounded-full" />
                    </div>
                    <span className="text-xl text-white font-medium">
                      A verified officer
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-1.5 p-2 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-full flex-shrink-0">
                      <div className="h-2 w-2 bg-white rounded-full" />
                    </div>
                    <span className="text-xl text-white font-medium">
                      Or an officially recognized educator partner
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Final Curiosity Hook */}
        <section className="relative py-28 lg:py-40 bg-gradient-to-b from-black via-neutral-950 to-black overflow-hidden">
          {/* Animated gradient orbs */}
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl" />

          <div className="container mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-[1.1]">
                <span className="text-gray-400">Unlock Everything.</span>
                <br />
                <span className="text-white text-transparent">
                  Lead Something Bigger.
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-neutral-200 mb-8 leading-relaxed font-light">
                The next generation of AI innovators, builders, and leaders
                starts here.
              </p>

              <div className="mt-14 flex flex-col sm:flex-row gap-5 justify-center">
                <Button
                  size="lg"
                  className="text-lg px-12 py-7 bg-white text-neutral-900 hover:bg-neutral-100 font-semibold shadow-2xl hover:shadow-3xl transition-all"
                  asChild
                >
                  <a href="#!" className="flex items-center gap-2">
                    Access Chapter Resources
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-12 py-7 border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-semibold backdrop-blur-sm transition-all text-black hover:text-white"
                  asChild
                >
                  <a href="/chapter-registration">Start a Chapter</a>
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
