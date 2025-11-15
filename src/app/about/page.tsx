import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import FinalCta from "@/components/sections/final-cta";
import Image from "next/image";

const metrics = [
  { label: "Students served", value: "12k+" },
  { label: "Chapters launched", value: "150+" },
  { label: "Funds raised", value: "$1.2M+" },
];

export default function About() {
  return (
    <div className="min-h-screen">
      <NavigationHeader />
      <main className="pt-20">
        <div className="container mx-auto px-5 sm:px-8 lg:px-12 py-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-6">
            About Univa Dev
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-center text-muted-foreground mb-6">
            Univa Dev is a multinational, federally registered, student-led
            nonprofit organization that empowers the next generation of leaders
            in Science, Technology, Engineering, and Mathematics. We stand out
            for higher-quality products delivered in the most professional way
            possible. We are open to anyone, regardless of income or ethnicity.
            Some of our programs include Raven Hacks — a hybrid hackathon with
            significant prizes and wide participation.
          </p>

          {/* Responsive Image */}
          <div className="max-w-4xl mx-auto my-12">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
              <Image
                src="/abt.png"
                alt="Univa Dev Team"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                className="object-cover"
                priority
              />
            </div>
          </div>

          <h2 className="text-3xl font-bold text-center mt-12 mb-4">
            Our impact
          </h2>
          <p className="text-center max-w-2xl mx-auto mb-10">
            Since our founding, we've focused on measurable student outcomes —
            growing chapter communities, creating funded opportunities, and
            helping members land internships and jobs.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="bg-white/5 border border-border rounded-lg p-6 text-center"
              >
                <div className="text-4xl md:text-5xl font-extrabold">
                  {m.value}
                </div>
                <div className="mt-2 text-sm font-medium text-muted-foreground">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          <section className="max-w-3xl mx-auto space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Community-first</h3>
              <p className="text-base text-muted-foreground">
                Chapters are student-led and supported by mentors. We center
                inclusion, accessibility, and hands-on collaboration.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-2">
                Learning by building
              </h3>
              <p className="text-base text-muted-foreground">
                Members learn through real projects, workshops, and challenges
                with tangible outcomes for resumes and portfolios.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-2">
                Long-term outcomes
              </h3>
              <p className="text-base text-muted-foreground">
                We track alumni outcomes and continuously iterate on programs
                that improve career readiness and community impact.
              </p>
            </div>
          </section>
        </div>

        {/* Reuse final call-to-action jumbotron from landing */}
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
