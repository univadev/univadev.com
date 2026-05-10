import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import PortalGlimpseSection from "@/components/sections/portal-glimpse-section";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Lock,
  Shield,
  Award,
  Sparkles,
} from "lucide-react";

export default function ChapterResources() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <NavigationHeader />
      <main className="pt-20">
        {/* Hero Section - Material Design */}
        <section className="relative py-32 lg:py-48 bg-white overflow-hidden">
          <div className="container mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] text-gray-900">
                The Global Chapter Portal
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-6 leading-relaxed font-normal">
                Where global youth leaders access the tools, intelligence, and
                technology powering our movement.
              </p>
              <p className="text-base text-gray-500 mb-14 tracking-wide">
                Available only to verified Chapter Leaders.
              </p>
              <div className="max-w-3xl mx-auto">
                <Image
                  src="/chapterportal.svg"
                  alt="Chapter Portal"
                  width={800}
                  height={646}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <PortalGlimpseSection />

        {/* The Leader Advantage */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                  The Leader Advantage
                </h2>
                <p className="text-xl text-gray-600 font-normal">
                  Elite access. Global impact. Exclusive opportunities.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="mb-8 flex justify-center">
                    <div className="p-6">
                      <Shield className="h-12 w-12 text-orange-500" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-5 text-gray-900">
                    Exclusivity On Purpose
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    Not everyone gets access.
                    <br />
                    <span className="text-gray-500">
                      Only official chapter leaders can enter the portal — and
                      that's what keeps the community world-class.
                    </span>
                  </p>
                </div>

                <div className="text-center group">
                  <div className="mb-8 flex justify-center">
                    <div className="p-6">
                      <Award className="h-12 w-12 text-orange-500" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-5 text-gray-900">
                    Global Recognition
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    <span className="text-gray-500">
                      Leaders receive formal status, certificates, and
                      opportunities only available through the chapter system.
                    </span>
                  </p>
                </div>

                <div className="text-center group">
                  <div className="mb-8 flex justify-center">
                    <div className="p-6">
                      <Sparkles className="h-12 w-12 text-orange-500" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-5 text-gray-900">
                    Early Access to Everything
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    Competitions. Grants. Summits.
                    <br />
                    <span className="text-gray-500">
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
          className="relative py-28 lg:py-40 bg-gray-50 overflow-hidden"
        >
          <div className="container mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white border border-gray-200 rounded-lg p-10 md:p-14 shadow-lg">
                <p className="text-xl text-gray-900 mb-8 leading-relaxed font-normal">
                  Out of respect for our leaders, chapter materials are not
                  displayed publicly.
                </p>
                <p className="text-lg text-gray-700 mb-10 leading-relaxed">
                  To access the curriculum, toolkits, leadership training, and
                  portal technologies, you must be:
                </p>

                <ul className="space-y-5 mb-12">
                  <li className="flex items-start gap-4">
                    <div className="mt-1.5 p-2 bg-blue-600 rounded-full flex-shrink-0">
                      <div className="h-2 w-2 bg-white rounded-full" />
                    </div>
                    <span className="text-xl text-gray-900 font-medium">
                      An approved Chapter Founder
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-1.5 p-2 bg-blue-600 rounded-full flex-shrink-0">
                      <div className="h-2 w-2 bg-white rounded-full" />
                    </div>
                    <span className="text-xl text-gray-900 font-medium">
                      A verified officer
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-1.5 p-2 bg-blue-600 rounded-full flex-shrink-0">
                      <div className="h-2 w-2 bg-white rounded-full" />
                    </div>
                    <span className="text-xl text-gray-900 font-medium">
                      Or an officially recognized educator partner
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Final Curiosity Hook */}
        <section className="relative py-28 lg:py-40 bg-white overflow-hidden">
          <div className="container mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-[1.1]">
                <span className="text-gray-600">Unlock Everything.</span>
                <br />
                <span className="text-gray-900">
                  Lead Something Bigger.
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed font-normal">
                The next generation of AI innovators, builders, and leaders
                starts here.
              </p>

              <div className="mt-14 flex flex-col sm:flex-row gap-5 justify-center">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-12 py-7 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 font-medium transition-all"
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
