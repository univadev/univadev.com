import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import Image from "next/image";
import { advisors } from "@/data/advisors";
import { UserPlus } from "lucide-react";

export default function Advisors() {
  return (
    <div className="min-h-screen">
      <NavigationHeader />
      <main className="pt-20">
        <div className="container mx-auto px-5 sm:px-8 lg:px-12 py-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-4">
            Our Advisors
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-center text-muted-foreground mb-10">
            Meet the advisors who guide our mission and help us
            deliver exceptional programs to students worldwide.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {advisors.map((advisor) => (
              <a
                key={advisor.name}
                href={advisor.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <article className="bg-white/5 border border-border rounded-lg overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-lg cursor-pointer">
                  <div className="relative w-full aspect-square">
                    <Image
                      src={advisor.image}
                      alt={advisor.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold mb-1">
                      {advisor.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {advisor.role}
                    </p>
                  </div>
                </article>
              </a>
            ))}

            {/* Become an Advisor Card */}
            <a
              href="mailto:univadev0@gmail.com"
              className="group block"
            >
              <article className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 rounded-lg overflow-hidden transition-all transform hover:-translate-y-1 hover:shadow-lg hover:border-primary cursor-pointer h-full flex flex-col items-center justify-center p-8 min-h-[300px]">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-4 bg-primary/10 rounded-full">
                    <UserPlus className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Become an Advisor</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Share your expertise and help shape the future of STEM
                    education
                  </p>
                  <p className="text-xs text-primary font-medium">
                    univadev0@gmail.com
                  </p>
                </div>
              </article>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
