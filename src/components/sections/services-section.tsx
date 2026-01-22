import { Code, Globe, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ServicesSection = () => {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              We build software for socially impactful initiatives
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've worked with 6 nonprofits, totaling an average of 100k+ monthly
              views on the websites we've built.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-[#ff7f50]/10 rounded-lg">
                  <Globe className="h-8 w-8 text-[#ff7f50]" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Website Development
              </h3>
              <p className="text-gray-600">
                Build your digital identity from the ground up
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-[#ff7f50]/10 rounded-lg">
                  <Code className="h-8 w-8 text-[#ff7f50]" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Custom Software
              </h3>
              <p className="text-gray-600">
                Tailored solutions that streamline operations
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-[#ff7f50]/10 rounded-lg">
                  <TrendingUp className="h-8 w-8 text-[#ff7f50]" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Design Refinement
              </h3>
              <p className="text-gray-600">
                Transform concepts into production-grade apps
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="text-lg px-12 py-7 bg-[#ff7f50] text-white hover:bg-[#ff6b3d] font-medium shadow-md hover:shadow-lg transition-all"
              asChild
            >
              <Link href="/services" className="flex items-center gap-2">
                Learn More About Our Services
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
