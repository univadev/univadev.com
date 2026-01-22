import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import { Button } from "@/components/ui/button";

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      <NavigationHeader />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-20 md:mt-32">Shape the future of STEM</h1>

          <p className="text-lg md:text-xl text-gray-700 mb-12">
            Univa Dev has opened core team applications for high school students worldwide!
          </p>

          <Button
            size="lg"
            className="text-lg px-12 py-7 bg-black text-white hover:bg-gray-900 font-semibold rounded-full transition-colors"
            asChild
          >
            <a href="https://tally.so/r/wMoQdX" target="_blank" rel="noopener noreferrer">
              Apply Now
            </a>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
