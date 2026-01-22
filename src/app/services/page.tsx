import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Code, Globe, Users, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";

const services = [
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

const benefits = [
  "Professional UI/UX that builds trust",
  "Production-grade applications",
  "Increased user engagement",
  "Scalable and maintainable code",
  "Student-led, professionally guided",
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavigationHeader />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-5 sm:px-8 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] text-gray-900">
                We build software for socially impactful initiatives
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-6 leading-relaxed font-normal">
                We've worked with 6 nonprofits, totaling an average of 100k+
                monthly views on the websites we've built.
              </p>
              <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                For some, we built the website and digital identity from the ground
                up. For others, we built custom software tools as well as refined
                their website design in order to increase user engagement,
                transforming their vibe-coded AI designs into production grade apps
                with professional UI that builds trust.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                  What We Offer
                </h2>
                <p className="text-xl text-gray-600 font-normal">
                  Comprehensive tech solutions for nonprofits
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {services.map((service, idx) => {
                  const IconComponent = service.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="mb-6 p-4 bg-[#ff7f50]/10 rounded-lg w-fit">
                        <IconComponent className="h-8 w-8 text-[#ff7f50]" />
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-gray-900">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-base">
                        {service.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-10 md:p-14">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900 text-center">
                  Our Impact
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  <div className="text-center">
                    <div className="text-5xl md:text-6xl font-bold text-[#ff7f50] mb-2">
                      6
                    </div>
                    <div className="text-lg text-gray-600">Nonprofits Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl md:text-6xl font-bold text-[#ff7f50] mb-2">
                      100k+
                    </div>
                    <div className="text-lg text-gray-600">
                      Average Monthly Views
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  {benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="mt-1 p-0.5 bg-[#ff7f50] rounded-full flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-lg text-gray-700 leading-relaxed">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Tracks */}
        <section className="py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                  Get Involved
                </h2>
                <p className="text-xl text-gray-600 font-normal">
                  Choose your path to make an impact
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Developers Track */}
                <div className="bg-white border-2 border-gray-200 rounded-lg p-10 hover:border-[#ff7f50] transition-all duration-300">
                  <div className="mb-6 p-4 bg-[#ff7f50]/10 rounded-lg w-fit">
                    <Code className="h-10 w-10 text-[#ff7f50]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    For Developers
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Join our team of student developers and build software that
                    creates real social impact. Work on meaningful projects, gain
                    professional experience, and make a difference.
                  </p>
                  <Button
                    size="lg"
                    className="w-full text-lg px-8 py-7 bg-[#ff7f50] text-white hover:bg-[#ff6b3d] font-medium shadow-md hover:shadow-lg transition-all"
                    asChild
                  >
                    <a href="/careers" className="flex items-center justify-center gap-2">
                      Apply as Developer
                      <ArrowRight className="h-5 w-5" />
                    </a>
                  </Button>
                </div>

                {/* Partners Track */}
                <div className="bg-white border-2 border-gray-200 rounded-lg p-10 hover:border-[#ff7f50] transition-all duration-300">
                  <div className="mb-6 p-4 bg-[#ff7f50]/10 rounded-lg w-fit">
                    <Users className="h-10 w-10 text-[#ff7f50]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    For Partners
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Partner with us to amplify your mission. Get professional
                    websites, custom software, and digital solutions that help you
                    reach more people and create greater impact.
                  </p>
                  <Button
                    size="lg"
                    className="w-full text-lg px-8 py-7 bg-[#ff7f50] text-white hover:bg-[#ff6b3d] font-medium shadow-md hover:shadow-lg transition-all"
                    asChild
                  >
                    <a
                      href="mailto:univadev0@gmail.com?subject=Partnership Inquiry"
                      className="flex items-center justify-center gap-2"
                    >
                      Partner With Us
                      <ArrowRight className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
